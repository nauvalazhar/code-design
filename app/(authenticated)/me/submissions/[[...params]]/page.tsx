import clsx from 'clsx';
import { BoxDescription, BoxTitle } from 'components/Box';
import { Button } from 'components/Button';
import SubmissionModeCheckbox from 'components/SubmissionModeCheckbox';
import { dateFormat } from 'lib/utils';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAuthUser, isUserReviewer } from 'services/auth-service';
import { getSubmissions } from 'services/submission-service';

export default async function Page({
  params: { params },
}: {
  params: { params: string[] };
}) {
  const mode = params ? params[0] : 'owner';
  const submissions = await getSubmissions({
    where: {
      mode: mode === 'reviewer' ? 'reviewer' : 'owner',
    },
  });

  const user = await getAuthUser();
  const isReviewer = await isUserReviewer();

  if (mode === 'reviewer' && !isReviewer) {
    notFound();
  }

  return (
    <>
      <SubmissionModeCheckbox />
      <BoxTitle>Submissions</BoxTitle>
      <BoxDescription>
        {mode === 'reviewer'
          ? 'Here you can review the submissions that are pending for your review.'
          : 'Here you can see all your submissions.'}
      </BoxDescription>

      <div className="space-y-8">
        {submissions.map((submission) => (
          <div
            key={submission.id}
            className={clsx(
              'flex justify-between items-center',
              'px-6 py-4 border-4 border-black hover:shadow-solid-sm transition-all',
              'hover:-translate-y-1 hover:-translate-x-1'
            )}>
            <div>
              <h3 className="text-3xl">{submission.challenge.name}</h3>
              <p className="text-xl">
                {dateFormat(submission.createdAt)} - {submission.phase} -{' '}
                {submission.user.name}
              </p>
            </div>
            <div className="flex gap-4">
              {isReviewer && submission.phase === 'submitted' && (
                <Button size="md" asChild>
                  <Link href={`/me/submission/${submission.slug}/review`}>
                    Review
                  </Link>
                </Button>
              )}

              <Button size="md" asChild>
                <Link href={`/me/submission/${submission.slug}`}>Edit</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
