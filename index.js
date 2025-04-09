import express from 'express';
import dotenv from 'dotenv';
import schoolRoutes from './routes/schoolRoutes.js';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
app.use('/api', schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0' , () => {
  console.log(`Server is running on port ${PORT}`);
});