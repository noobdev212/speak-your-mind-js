import express from 'express'
import {default as testRouter} from './test.module.ts'
import {default as userRouter} from './user.module.ts'

const router: express.Appliction = express();
router.use('/test', testRouter);
router.use('/user', userRouter);

export default router
