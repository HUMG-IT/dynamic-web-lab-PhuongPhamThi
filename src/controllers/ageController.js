const db = require('../firebase');

/**
 * Hàm calculateAge xử lý yêu cầu tính tuổi từ năm sinh của client.
 * Nó tính tuổi, lưu dữ liệu vào Firestore, và trả về phản hồi JSON.
 *
 * @param {Object} req - Yêu cầu từ client, chứa năm sinh.
 * @param {Object} res - Phản hồi trả về cho client, chứa tuổi và thông báo.
 */
const calculateAge = async (req, res) => {
  try {
    const { birthYear } = req.body;

    // Kiểm tra năm sinh hợp lệ
    if (!birthYear || isNaN(birthYear) || birthYear > new Date().getFullYear()) {
      return res.status(400).json({ message: 'Năm sinh không hợp lệ!' });
    }

    // Tính tuổi dựa trên năm hiện tại
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    // Lưu dữ liệu tuổi vào Firestore
    await db.collection('ages').add({ birthYear, age });

    // Trả về phản hồi JSON
    return res.status(200).json({ currentYear, age, message: 'Dữ liệu đã được lưu thành công!' });
  } catch (error) {
    console.error('Lỗi khi tính tuổi:', error);
    return res.status(500).json({ error: 'Đã xảy ra lỗi khi lưu dữ liệu tuổi!' });
  }
};

module.exports = { calculateAge };