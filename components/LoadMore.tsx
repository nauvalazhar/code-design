'use client';

import { useState } from 'react';

import { Button } from 'components/Button';

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
  const [moreNodes, setMoreNodes] = useState<React.JSX.Element[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);

    const nextOffset = offset + limit;
    const data = await loadMoreAction(nextOffset, loadMoreParams);

    setMoreNodes(prev => [...prev, data]);
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
      </div>
      {hasMore ? (
        <Button
          className="w-full mt-8"
          onClick={handleClick}
          progress={loading}
        >
          Load More
        </Button>
      ) : null}
    </>
  );
};

export default LoadMore;
