import { notFound } from 'next/navigation';

import Box, { BoxTitle } from 'components/Box';
import SubmissionForm from 'components/SubmissionForm';

export const metadata = {
  title: 'Submission'
};

export default function Page({
  params: { slug }
}: {
  params: { slug: string };
}) {
  if (true) {
    notFound();
  }

  return (
    <Box>
      <BoxTitle>Submission</BoxTitle>
      <SubmissionForm challenge={slug} />
    </Box>
  );
}
