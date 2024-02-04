import { getIronSession, sealData, type SessionOptions } from 'iron-session';
import { cookies } from 'next/headers';

export type SessionData = {
  token: string;
  expires: number;
  userId: number;
};

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET || '',
  cookieName: 'ctd',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production' ? true : false,
  },
};

export async function getSession() {
  return getIronSession<SessionData>(cookies(), sessionOptions);
}

export async function encryptData(data: unknown): Promise<string> {
  return sealData(data, sessionOptions);
}
