const request = require('supertest');
const express = require('express');
const { calculateBMI, classifyBMI } = require('../src/models/bmi');

const app = express();
app.use(express.json());

// Names API
const names = [];
app.post('/api/v1/submit', (req, res) => {
  const name = req.body.name;
  names.push(name);
  res.json({ message: `Xin chào, ${name}!`, names });
});

// BMI API
app.post('/api/v1/bmi', (req, res) => {
  const { weight, height } = req.body;

  // Kiểm tra nếu trọng lượng hoặc chiều cao không hợp lệ
  if (weight <= 0 || height <= 0) {
    return res.status(400).json({ error: 'Trọng lượng và chiều cao phải lớn hơn 0' });
  }

  const bmi = calculateBMI(weight, height);
  const classification = classifyBMI(bmi);
  res.json({ bmi, classification });
});

// Age API
app.post('/api/v1/age', (req, res) => {
  const { birthYear } = req.body;
  
  if (!birthYear) {
    return res.status(400).json({ message: 'Năm sinh là bắt buộc!' });
  }

  const currentYear = new Date().getFullYear();
  const parsedBirthYear = Number(birthYear);
  
  if (isNaN(parsedBirthYear) || parsedBirthYear > currentYear) {
    return res.status(400).json({ message: 'Năm sinh không hợp lệ!' });
  }

  const age = currentYear - parsedBirthYear;
  res.json({ birthYear: parsedBirthYear, age });
});

// Test suites
describe('POST /api/v1/submit', () => {
  it('trả về lời chào và cập nhật mảng tên', async () => {
    const res = await request(app)
      .post('/api/v1/submit')
      .send({ name: 'John' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Xin chào, John!');
    expect(res.body.names).toContain('John');
  });

  it('xử lý tên rỗng', async () => {
    const res = await request(app)
      .post('/api/v1/submit')
      .send({ name: '' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Xin chào, !');
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

  it('xử lý dữ liệu đầu vào không hợp lệ', async () => {
    const res = await request(app)
      .post('/api/v1/bmi')
      .send({ weight: -1, height: 165 });
    expect(res.statusCode).toEqual(400);
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
    expect(res.body).toHaveProperty('message', 'Năm sinh không hợp lệ!');
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
    expect(res.body).toHaveProperty('message', 'Năm sinh không hợp lệ!');
  });
});