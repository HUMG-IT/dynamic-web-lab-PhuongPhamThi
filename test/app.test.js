import request from 'supertest';  
import express from 'express';  
import { calculateBMI, classifyBMI } from '../src/models/bmi';  

const app = express();
app.use(express.json());

// Names API
const names = [];
app.post('/api/v1/submit', (req, res) => {
  const name = req.body.name;

  // Kiểm tra tên hợp lệ
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ message: 'Tên không hợp lệ. Vui lòng nhập lại!' });
  }

  names.push(name.trim());
  res.status(200).json({ message: `Xin chào, ${name.trim()}!`, names });
});

// BMI API
app.post('/api/v1/bmi', (req, res) => {
  const { weight, height } = req.body;

  // Kiểm tra dữ liệu đầu vào
  if (!weight || !height || weight <= 0 || height <= 0 || isNaN(weight) || isNaN(height)) {
    return res.status(400).json({ message: 'Cân nặng và chiều cao phải là số dương hợp lệ!' });
  }

  const bmi = calculateBMI(weight, height);
  const classification = classifyBMI(bmi);
  res.status(200).json({ bmi, classification });
});

// Age API
app.post('/api/v1/age', (req, res) => {
  const { birthYear } = req.body;

  // Kiểm tra dữ liệu đầu vào
  if (!birthYear) {
    return res.status(400).json({ message: 'Năm sinh là bắt buộc!' });
  }

  const currentYear = new Date().getFullYear();
  const parsedBirthYear = Number(birthYear);

  if (isNaN(parsedBirthYear) || parsedBirthYear > currentYear || parsedBirthYear < 1900) {
    return res.status(400).json({ message: 'Năm sinh không hợp lệ! Vui lòng kiểm tra và nhập lại.' });
  }

  const age = currentYear - parsedBirthYear;
  res.status(200).json({ birthYear: parsedBirthYear, age });
});

// Test Suites
describe('POST /api/v1/submit', () => {
  it('trả về lời chào và cập nhật mảng tên', async () => {
    const res = await request(app)
      .post('/api/v1/submit')
      .send({ name: 'John' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Xin chào, John!');
    expect(res.body.names).toContain('John');
  });

  it('trả về lỗi khi tên rỗng', async () => {
    const res = await request(app)
      .post('/api/v1/submit')
      .send({ name: '' });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('message', 'Tên không hợp lệ. Vui lòng nhập lại!');
  });
});

describe('POST /api/v1/bmi', () => {
  it('tính chỉ số BMI và phân loại "Bình thường"', async () => {
    const res = await request(app)
      .post('/api/v1/bmi')
      .send({ weight: 60, height: 165 });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('bmi');
    expect(res.body).toHaveProperty('classification', 'Bình thường');
  });

  it('phân loại "Gầy" cho BMI thấp', async () => {
    const res = await request(app)
      .post('/api/v1/bmi')
      .send({ weight: 45, height: 165 });
    expect(res.statusCode).toEqual(200);
    expect(res.body.classification).toBe('Gầy');
  });

  it('phân loại "Thừa cân" cho BMI cao', async () => {
    const res = await request(app)
      .post('/api/v1/bmi')
      .send({ weight: 75, height: 165 });
    expect(res.statusCode).toEqual(200);
    expect(res.body.classification).toBe('Thừa cân');
  });

  it('phân loại "Béo phì" cho BMI rất cao', async () => {
    const res = await request(app)
      .post('/api/v1/bmi')
      .send({ weight: 90, height: 165 });
    expect(res.statusCode).toEqual(200);
    expect(res.body.classification).toBe('Béo phì');
  });

  it('trả về lỗi khi dữ liệu đầu vào không hợp lệ', async () => {
    const res = await request(app)
      .post('/api/v1/bmi')
      .send({ weight: -1, height: 165 });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('message', 'Cân nặng và chiều cao phải là số dương hợp lệ!');
  });
});

describe('POST /api/v1/age', () => {
  it('tính đúng tuổi với năm sinh hợp lệ', async () => {
    const res = await request(app)
      .post('/api/v1/age')
      .send({ birthYear: 2004 });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('birthYear', 2004);
    expect(res.body.age).toBe(new Date().getFullYear() - 2004);
  });

  it('trả về lỗi khi năm sinh trong tương lai', async () => {
    const res = await request(app)
      .post('/api/v1/age')
      .send({ birthYear: new Date().getFullYear() + 1 });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('message', 'Năm sinh không hợp lệ! Vui lòng kiểm tra và nhập lại.');
  });

  it('tính tuổi đúng cho năm sinh xa trong quá khứ', async () => {
    const res = await request(app)
      .post('/api/v1/age')
      .send({ birthYear: 1900 });
    expect(res.statusCode).toEqual(200);
    expect(res.body.age).toBe(new Date().getFullYear() - 1900);
  });

  it('trả về lỗi khi không có năm sinh', async () => {
    const res = await request(app)
      .post('/api/v1/age')
      .send({});
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('message', 'Năm sinh là bắt buộc!');
  });

  it('trả về lỗi khi năm sinh không phải số', async () => {
    const res = await request(app)
      .post('/api/v1/age')
      .send({ birthYear: 'không phải số' });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('message', 'Năm sinh không hợp lệ! Vui lòng kiểm tra và nhập lại.');
  });
});

export default app; 
