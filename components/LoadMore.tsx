'use client';

import { Button } from 'components/Button';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type LoadMoreProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  loadMoreParams: any;
  loadMoreAction: (offset, params) => any;
  limit: number;
  total: number;
};

const LoadMore = ({
  children,
  loadMoreAction,
  loadMoreParams,
  limit,
  total,
  ...props
}: LoadMoreProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [moreNodes, setMoreNodes] = useState<React.JSX.Element[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMoreNodes([]);
    setOffset(0);
  }, [pathname, searchParams]);

  async function handleClick() {
    setLoading(true);

    const nextOffset = offset + limit;
    const data = await loadMoreAction(nextOffset, loadMoreParams);

    setMoreNodes((prev) => [...prev, data]);
    setOffset(nextOffset);
    setLoading(false);
  }

  const hasMore = offset + limit < total;

  return (
    <>
      <h2 className="text-lg text-white mb-4">
        {total === 1
          ? 'There is 1 challenge available'
          : `There are ${total} challenges available`}
      </h2>

      <div {...props}>
        {children}
        {moreNodes}

        {hasMore ? (
          <Button className="w-full" onClick={handleClick} progress={loading}>
            Load More
          </Button>
        ) : null}
      </div>
    </>
  );
};

export default LoadMore;
