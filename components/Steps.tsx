import clsx from 'clsx';

type StepsProps = React.HTMLAttributes<HTMLOListElement>;

export function Steps({ children }: StepsProps) {
  return (
    <ol className={clsx('flex flex-col gap-4', '[counter-reset:step-counter]')}>
      {children}
    </ol>
  );
}

export function Step({ children }: StepsProps) {
  return (
    <li
      className={clsx(
        'before:content-[counter(step-counter)]',
        '[counter-increment:step-counter]',
        'before:size-8 before:bg-blue-500 before:rounded-full',
        'before:grid before:place-items-center before:text-white',
        'before:flex-shrink-0',
        'flex items-center gap-4'
      )}
    >
      {children}
    </li>
  );
}
