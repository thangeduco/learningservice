// src/server.ts

import express from 'express';
import cors from 'cors';
import learningRoutes from './interfaces/routes/learning.routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.send('🎓 Learning Service is running!');
});

app.use('/api', learningRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
