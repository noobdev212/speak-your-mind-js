import dotenv from 'dotenv'
import app from './api/index.ts'

dotenv.config();

const PORT: number = process.env.PORT || 8000;

app.listen(PORT, async (): void => {
  console.log(`Connected to port ${PORT}`);
});
