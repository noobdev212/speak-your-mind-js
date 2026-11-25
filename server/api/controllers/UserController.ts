import { createUser } from '../models/UserModel.ts'
import {LogLevel, log} from '../utils/debug.ts'
import express from 'express'

export async function postRegister(req: express.Request, res: express.Response): void {
  const _log = (msg: string, level: LogLevel) => log('postRegister', msg, level);
  _log('called', LogLevel.INFO);

  const {email, password, repassword} = req.body;

  if (email == undefined || password == undefined || repassword == undefined || password != repassword) {
    _log(`invalid credentials`, LogLevel.WARN);
    res.status(400).json({
      'success': false,
      'message': 'invalid credentials',
      'payload': {}
    });

    return;
  }

  const data = await createUser({email: email, password: password, role: 'user'});

  res.status(201).json({
    'success': true,
    'message': 'successful creation',
    'payload': data
  });

}
