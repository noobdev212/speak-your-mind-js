import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import type { UserCredType, TokenPair } from 'types.d.ts';

export function genAccessToken(user: UserCredType) : string {
  return jwt.sign({
    sub: user.id,
    email: user.email,
    role: user.role
  },
  process.env.ACCESS_TOKEN_SECRET,
  ,{ expiresIn: process.env.ACCESS_TOKEN_EXPIRY || '15m' });
}

export function genRefreshToken(user: UserCredType) : TokenPair {
  const jwtId = crypto.randomUUID();
  const token = jwt.sign({
    sub: user.id, jwtId
  },
  process.env.REFRESH_TOKEN_SECRET,
  { expiresIn: process.env.REFRESH_TOKEN_EXPIRY || '7d' });

  return {token, jwtId};
}

export function verifyAccessToken(token: string) : object {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
}

export function verifyRefreshToken(token: string) : object {
  return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
}
