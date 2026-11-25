import {
  createUser,
  findUser,
  verifyUser
} from '../models/UserModel.ts'
import { LogLevel, log } from '../utils/debug.ts'
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

export async function postLogin(req: express.Request, res: express.Response): void {
  const _log = (msg: string, level: LogLevel) => log('login', msg, level);
  _log('called', LogLevel.INFO);

  const {email, password} = req.body;
  if (email == undefined || password == undefined) {
    _log(`invalid credentials`, LogLevel.WARN);
    res.status(400).json({
      'success': false,
      'message': 'invalid credentials',
      'payload': {}
    });

    return;
  }

  const data = await verifyUser({ email: email, password: password });
  if (data === null) {
    _log(`failed to find user`, LogLevel.WARN);
    res.status(400).json({
      'success': false,
      'message': 'failed to find user',
      'payload': {}
    });

    return;
  }

  res.status(200).json({
    'success': true,
    'message': 'successful login',
    'payload': {
      id: data._id,
      email: data.email,
      role: data.role
    }
  });
}

export async function getUser(req: express.Request, res: express.Response): void {
  const _log = (msg: string, level: LogLevel) => log('getuser', msg, level);
  _log('called', LogLevel.INFO);

  const {email} = req.params;

  if (email == undefined) {
    _log(`email is undefined`, LogLevel.WARN);
    res.status(400).json({
      'success': false,
      'message': 'email is undefined',
      'payload': {}
    });

    return;
  }

  const data = await findUser({ email: email });
  if (data === null) {
    _log(`failed to find user`, LogLevel.WARN);
    res.status(400).json({
      'success': false,
      'message': 'failed to find user',
      'payload': {}
    });

    return;
  }

  res.status(200).json({
    'success': true,
    'message': 'successful fetch',
    'payload': {
      id: data._id,
      role: data.role
    }
  });
}
