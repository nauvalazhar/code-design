import { getSession } from 'lib/session';
import { NextResponse, type NextRequest } from 'next/server';

export async function authMiddleware(request: NextRequest) {
  const paths = ['/me'];
  const session = await getSession();

  if (paths.some((path) => request.nextUrl.pathname.startsWith(path))) {
    if (!session.userId) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }
}
