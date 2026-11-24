import express from 'express'
import {
  getTest,
  postTest
} from '../controllers/TestController.ts'

const router: express.Appliction = express();

router.get('/sync/:data', getTest);
router.post('/ack', postTest);


export default router
