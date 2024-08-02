import { redirect } from 'next/navigation';
import { isAuth } from 'services/auth-service';

import Box, { BoxDescription, BoxTitle } from 'components/Box';
import { Button } from 'components/Button';

export const metadata = {
  title: 'Login'
};

export default async function Page() {
  const isLogin = await isAuth();

  if (isLogin) {
    redirect('/me');
  }

  return (
    <Box>
      <BoxTitle>Login</BoxTitle>
      <BoxDescription>You can only login with GitHub for now.</BoxDescription>
      <Button asChild>
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_ID}`}
        >
          Login with github
        </a>
      </Button>
    </Box>
  );
}
