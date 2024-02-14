import Box, { BoxTitle } from 'components/Box';
import { redirect } from 'next/navigation';
import { isAuth } from 'services/auth-service';

export default async function Page() {
  const isLogin = await isAuth();

  if (isLogin) {
    redirect('/me');
  }

  return (
    <Box>
      <BoxTitle>Login</BoxTitle>
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_ID}`}>
        Login with github
      </a>
    </Box>
  );
}
