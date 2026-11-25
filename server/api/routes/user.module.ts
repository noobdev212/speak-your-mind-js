import express from 'express'
import {
  postRegister,
  postLogin,
  getUser
} from '../controllers/UserController.ts'

const router: express.Appliction = express();

router.post('/register', postRegister);
router.post('/login', postLogin);
router.get('/fetch/:email', getUser);

export default router
