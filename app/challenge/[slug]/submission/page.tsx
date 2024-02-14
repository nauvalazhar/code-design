import Box, { BoxTitle } from 'components/Box';
import SubmissionForm from 'components/SubmissionForm';

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <Box>
      <BoxTitle>Submission</BoxTitle>
      <SubmissionForm challenge={slug} />
    </Box>
  );
}
