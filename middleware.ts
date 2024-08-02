import { authMiddleware } from 'middlewares/auth-middleware';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const url = new URL(request.nextUrl);

  const middlewares = [authMiddleware];

  for (const middleware of middlewares) {
    const response = await middleware(request);

    if (response) {
      return response;
    }
  }
}
