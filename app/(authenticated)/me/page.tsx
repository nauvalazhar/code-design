import { BoxTitle } from 'components/Box';
import { Field, Input, Label } from 'components/Form';
import { getAuthUser } from 'services/auth-service';

export default async function Page() {
  const user = await getAuthUser();

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
        We're still working on this page. Currently you can only view your
        profile.
      </p>
    </>
  );
}
