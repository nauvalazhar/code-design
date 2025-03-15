import {
  getChallenges,
  type GetChallengesParams
} from 'services/challenge-service';

import CategoriesSelector from 'components/CategoriesSelector';
import Challenges from 'components/Challenges';
import DifficultiesSelector from 'components/DifficultiesSelector';
import LoadMore from 'components/LoadMore';
import { SectionTitle } from 'components/SectionTitle';

export const metadata = {
  title: 'Challenges'
};

async function loadMore(offset, params) {
  'use server';

  const { challenges } = await getChallenges({
    ...params,
    offset
  });

  return <Challenges challenges={challenges} />;
}

export default async function Page({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const dataParams: GetChallengesParams = {
    where: {
      difficultyId: Number(searchParams.difficulty) || undefined,
      categoryId: Number(searchParams.category) || undefined
    }
  };

  const { challenges, limit, total } = await getChallenges(dataParams);

  console.log(challenges.find(challenge => challenge.id === 52));

  return (
    <section className="flex flex-col">
      <div className="flex flex-wrap items-center gap-3 lg:gap-5 mb-10">
        <SectionTitle>Challenges</SectionTitle>
        <div className="ml-auto">
          <DifficultiesSelector />
        </div>
        <div>
          <CategoriesSelector />
        </div>
      </div>

      <LoadMore
        loadMoreAction={loadMore}
        loadMoreParams={dataParams}
        limit={limit}
        total={total}
        className="grid grid-cols-2 gap-8"
      >
        <Challenges challenges={challenges} />
      </LoadMore>
    </section>
  );
}
