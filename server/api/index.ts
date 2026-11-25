import express from 'express'
import router from './routes/index.ts'
import cors from 'cors'

const api: express.Application = express();

api.use(express.json());

api.use(cors({
  origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
api.use('/api/v1', router);

export default api
