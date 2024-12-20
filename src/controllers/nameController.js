import { db } from '../config/firebase.js';

/**
 * Hàm `submitName` xử lý yêu cầu POST chứa một tên mới từ client.
 */
export const submitName = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Vui lòng nhập tên hợp lệ!' });
    }

    // Lưu tên vào Firestore
    await db.collection('names').add({ name });

    // Lấy danh sách tất cả các tên từ Firestore
    const snapshot = await db.collection('names').get();
    const names = snapshot.docs.map((doc) => doc.data().name);

    res.json({ message: `Xin chào, ${name}!`, names });
  } catch (error) {
    console.error('Lỗi khi lưu tên:', error);
    res.status(500).json({ error: 'Đã xảy ra lỗi khi lưu tên!' });
  }
};
