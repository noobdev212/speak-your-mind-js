export type UserRoleType = 'user' | 'admin';

export type UserCredType = {
  id: string;
  email?: string;
  role?: UserRoleType;
};

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
};
