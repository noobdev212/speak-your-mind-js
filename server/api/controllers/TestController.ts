import express from 'express'
import {LogLevel, log} from '../utils/debug.ts'

export async function getTest(req: express.Request, res: express.Response): void {
  const _log = (msg: string, level: LogLevel) => log('getTest', msg, level);
  _log('called', LogLevel.INFO);

  const { data } : { data: string } = req.params;

  if (data == undefined) {
    _log(`data is undefined`, LogLevel.DEBUG);
    res.status(400).json({
      'success': false,
      'message': 'data is undefined',
      'payload': {}
    });
  }
  else {
    _log(`knowledge sync: ${data}`, LogLevel.DEBUG);
    res.status(200).json({
      'success': true,
      'message': 'acknowledge',
      'payload': {
        'test': 'Here is my secret key!!'
      }
    });
  }
}

export async function postTest(req: express.Request, res: express.Response): void {
  const _log = (msg: string, level: LogLevel) => log('postTest', msg, level);
  _log('called', LogLevel.INFO);

  const { data } : { data: string } = req.body;

  if (data == undefined) {
    _log(`data is undefined`, LogLevel.DEBUG);
    res.status(400).json({
      'success': false,
      'message': 'data is undefined',
      'payload': {}
    });
  }
  else {
    _log(`knowledge sync: ${data}`, LogLevel.DEBUG);
    res.status(200).json({
      'success': true,
      'message': 'acknowledge',
      'payload': {
        'test': 'Here is my secret key!!'
      }
    });
  }
}
