import { getChallenges } from 'services/challenge-service';

export default async function Page() {
  const challenges = await getChallenges();

  return <h1>Test 2</h1>;
}
