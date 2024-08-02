import { redirect } from 'next/navigation';
import { getAuthUser } from 'services/auth-service';

import { BoxTitle } from 'components/Box';
import { Field, Input, Label } from 'components/Form';

export const metadata = {
  title: 'Profile'
};

export default async function Page() {
  const user = await getAuthUser();

  if (true) {
    redirect('/construction');
  }

  return (
    <>
      <BoxTitle>Profile</BoxTitle>
      <Field>
        <Label>Name</Label>
        <Input value={user.name} readOnly />
      </Field>
      <Field>
        <Label>Username</Label>
        <Input value={user.username} readOnly />
      </Field>
      <Field>
        <Label>Registered at</Label>
        <Input value={user.createdAt.toDateString()} readOnly />
      </Field>
      <p className="text-xl">
        We&apos;re still working on this page. Currently you can only view your
        profile.
      </p>
    </>
  );
}
