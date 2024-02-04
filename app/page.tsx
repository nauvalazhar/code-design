import { Button } from 'components/Button';
import Challenges from 'components/Challenges';
import Link from 'next/link';
import { getChallenges } from 'services/challenge-service';

const MAX_DESC_LENGTH = 100;

export type Category = 'All Categories' | 'App' | 'Component' | 'Page';

export default async function Home() {
  const challenges = await getChallenges({
    limit: 3,
  });

  return (
    <section className="flex flex-col space-y-10">
      <Challenges challenges={challenges} />
      <Button asChild>
        <Link href="/challenges">View All Challenges</Link>
      </Button>
    </section>
  );
}
