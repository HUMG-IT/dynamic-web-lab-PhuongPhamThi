/**
 * Controller để xử lý yêu cầu tính tuổi từ năm sinh.
 * 
 * @param {Object} req - Yêu cầu từ client, chứa dữ liệu năm sinh.
 * @param {Object} res - Phản hồi trả về cho client.
 */
const calculateAge = (req, res) => {
    const { birthYear } = req.body;

    // Kiểm tra năm sinh hợp lệ
    if (!birthYear || isNaN(birthYear) || birthYear > new Date().getFullYear()) {
        return res.status(400).json({ message: 'Năm sinh không hợp lệ!' });
    }

    // Tính tuổi dựa trên năm hiện tại
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    res.status(200).json({currentYear, age});
};

module.exports = { calculateAge };
