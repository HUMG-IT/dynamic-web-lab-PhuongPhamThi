const { calculateBMI, classifyBMI } = require('../models/bmi');
const db = require('../firebase');

/**
 * Hàm getBMI xử lý yêu cầu tính chỉ số BMI từ client.
 * Nó tính BMI, phân loại kết quả, và lưu dữ liệu vào Firestore.
 *
 * @param {Object} req - Yêu cầu từ client, chứa chiều cao và cân nặng.
 * @param {Object} res - Phản hồi trả về cho client, chứa BMI và phân loại.
 */
const getBMI = async (req, res) => {
  try {
    const { weight, height } = req.body;

    // Tính chỉ số BMI và phân loại
    const bmi = calculateBMI(weight, height);
    const classification = classifyBMI(bmi);

    // Lưu dữ liệu BMI vào Firestore
    await db.collection('bmi').add({ weight, height, bmi, classification });

    // Trả về phản hồi JSON
    res.status(200).json({ bmi, classification });
  } catch (error) {
    console.error('Lỗi khi tính BMI:', error);
    res.status(500).json({ error: 'Có lỗi xảy ra trên server' });
  }
};

module.exports = { getBMI };