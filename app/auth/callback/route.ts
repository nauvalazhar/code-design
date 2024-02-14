import { encryptData, getSession } from 'lib/session';
import { redirect } from 'next/navigation';
import { findOrRegisterUser } from 'services/user-service';

export async function GET(request: Request) {
  const session = await getSession();

  const query = new URL(request.url).searchParams;
  const code = query.get('code');

  const accessToken = await fetch(
    'https://github.com/login/oauth/access_token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_ID,
        client_secret: process.env.GITHUB_SECRET,
        code,
      }),
    }
  );

  const result = await accessToken.json();

  if (result.error) {
    return new Response(result.error, { status: 400 });
  }

  const resultUser = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${result.access_token}`,
    },
  });
  const userInfo = await resultUser.json();

  const resultEmails = await fetch('https://api.github.com/user/emails', {
    headers: {
      Authorization: `Bearer ${result.access_token}`,
    },
  });
  const emails = await resultEmails.json();

  const [user] = await findOrRegisterUser({
    username: userInfo.login,
    email: emails.find((email: any) => email.primary)?.email,
    name: userInfo.name || userInfo.login,
    bio: userInfo.bio,
    avatar: userInfo.avatar_url,
    githubId: userInfo.id,
    hireable: userInfo.hireable,
    refreshToken: await encryptData({
      token: result.refresh_token,
      expires: result.refresh_token_expires_in,
    }),
  });

  session.token = result.access_token;
  session.expires = result.expires_in;
  session.userId = user.id;

  await session.save();

  redirect('/');
}
