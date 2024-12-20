import { calculateBMI, classifyBMI } from '../models/bmi.js';
import { db } from '../config/firebase.js';

/**
 * Hàm getBMI xử lý yêu cầu tính chỉ số BMI từ client.
 */
export const getBMI = async (req, res) => {
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
