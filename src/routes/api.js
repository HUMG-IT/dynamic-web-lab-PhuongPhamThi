import express from 'express';
import { submitName } from '../controllers/nameController.js';
import { getBMI } from '../controllers/bmiController.js';
import { calculateAge } from '../controllers/ageController.js';

const router = express.Router();

/**
 * Route cho endpoint `/submit`
 * 
 * Route này nhận yêu cầu POST từ client với tên người dùng và
 * gọi hàm `submitName` từ `nameController` để thêm tên vào danh sách.
 * 
 * @route POST /api/v1/submit
 * @access Public
 * @returns {Object} JSON - Trả về thông điệp chào và danh sách tên.
 */
router.post('/submit', submitName);

/**
 * Route cho endpoint `/bmi`
 * 
 * Route này nhận yêu cầu POST từ client với thông tin chiều cao và cân nặng,
 * gọi hàm `getBMI` từ `bmiController` để tính và phân loại chỉ số BMI.
 * 
 * @route POST /api/v1/bmi
 * @access Public
 * @returns {Object} JSON - Trả về chỉ số BMI và phân loại.
 */
router.post('/bmi', getBMI);

/**
 * Route cho endpoint `/age`
 * 
 * Route này nhận yêu cầu POST từ client với năm sinh,
 * gọi hàm `calculateAge` từ `ageController` để tính tuổi.
 * 
 * @route POST /api/v1/age
 * @access Public
 * @returns {Object} JSON - Trả về tuổi và thông báo.
 */
router.post('/age', calculateAge);

export { router };