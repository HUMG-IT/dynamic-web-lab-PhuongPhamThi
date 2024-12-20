import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { router as apiRoutes } from './routes/api.js';

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Sử dụng các route API
app.use('/api/v1', apiRoutes);

app.listen(port, () => {
  console.log(`Server đang chạy ở cổng ${port}`);
  console.log(`Truy cập vào http://localhost:${port} để xem ứng dụng`);
});