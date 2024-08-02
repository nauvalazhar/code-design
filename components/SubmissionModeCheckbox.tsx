'use client';

import clsx from 'clsx';
import { Interfaces } from 'doodle-icons';
import { useParams, useRouter } from 'next/navigation';

const SubmissionModeCheckbox = () => {
  const router = useRouter();
  const { params = [] } = useParams();
  const [mode] = params;

  function handleChange(e) {
    const isChecked = e.target.checked;

    if (isChecked) {
      return router.push('/me/submissions/reviewer');
    }

    return router.push('/me/submissions');
  }

  return (
    <label className="flex items-center cursor-pointer float-right">
      <input
        type="checkbox"
        className="invisible absolute peer"
        onChange={handleChange}
        defaultChecked={mode === 'reviewer'}
      />
      <span
        className={clsx(
          'relative flex items-center',
          'peer-checked:[&_.checkbox-tick]:block [&_.checkbox-tick]:hidden'
        )}>
        <Interfaces.Square className="w-8 mr-2 checkbox-square" />
        <Interfaces.Tick className="absolute w-8 top-0 checkbox-tick" />
        <span className="text-2xl">As Reviewer</span>
      </span>
    </label>
  );
};

export default SubmissionModeCheckbox;
