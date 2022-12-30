import clsx from 'clsx';

export default function Page() {
  return (
    <div
      className={clsx(
        'px-20 py-20 relative',
        'bg-brand border-4 border-black',
        'shadow-solid'
      )}>
      <h1 className="text-4xl font-display">Help Page</h1>
      <p>Not helping actually</p>
    </div>
  );
}
