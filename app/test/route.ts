import { getSession } from 'lib/session';

export async function GET() {
  const session = await getSession();

  const response = await fetch('https://api.github.com/user/emails', {
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
  });

  const data = await response.json();

  return Response.json(data);
}
