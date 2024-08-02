import { SubmissionMode } from 'app/actions';
import { notFound } from 'next/navigation';
import { getAuthId, isUserReviewer } from 'services/auth-service';
import { getSubmissionBySlug } from 'services/submission-service';

import Box, { BoxTitle } from 'components/Box';
import SubmissionForm from 'components/SubmissionForm';

export const metadata = {
  title: 'Submission'
};

export default async function Page({
  params: { params }
}: {
  params: { params: string[] };
}) {
  const slug = params[0];
  let mode = (params[1] || 'edit') as SubmissionMode;
  const submission = await getSubmissionBySlug(slug);
  const isReviewer = isUserReviewer();
  const userId = await getAuthId();

  if (isReviewer) {
    mode = 'review';
  }

  if (
    (mode === 'review' && !isReviewer) ||
    (submission.reviewer && submission.reviewer?.userId !== userId)
  ) {
    notFound();
  }

  return (
    <div>
      <BoxTitle className="capitalize">{mode} Submission</BoxTitle>
      <SubmissionForm
        challenge={slug}
        submissionId={submission.id}
        defaultValues={{
          demo: submission.demo,
          repository: submission.repository,
          description: submission.description,
          phase: submission.phase,
          note: submission.note,
          image: submission.image,
          techs: submission.techs
        }}
        mode={mode}
      />
    </div>
  );
}
