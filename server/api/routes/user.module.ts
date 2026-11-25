import express from 'express'
import {
  postRegister
} from '../controllers/UserController.ts'

const router: express.Appliction = express();

router.post('/register', postRegister);

export default router
