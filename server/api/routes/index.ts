import express from 'express'
import {default as testRouter} from './test.module.ts'

const router: express.Appliction = express();
router.use('/test', testRouter);

export default router
