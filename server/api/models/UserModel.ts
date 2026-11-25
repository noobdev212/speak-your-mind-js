import { db } from '../utils/db.ts'
import { LogLevel, log } from '../utils/debug.ts'
import type { UserItems } from './types.d.ts'

export async function createUser(items: UserItems): Promise<unknown> {
  const _log = (msg: string, level: LogLevel) => log('createUser', msg, level);
  _log('called', LogLevel.INFO);

  let collection = await db.collection('users');
  let result = await collection.insertOne({
    email: items.email,
    password: items.password,
    role: items.role
  });

  _log(JSON.stringify(result), LogLevel.DEBUG);

  return result;
}
