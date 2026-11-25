import dotenv from 'dotenv'
import api from './api/index.ts'

dotenv.config();

const PORT: number = process.env.PORT || 8000;

api.listen(PORT, async (): void => {
  console.log(`Connected to port ${PORT}`);
});
