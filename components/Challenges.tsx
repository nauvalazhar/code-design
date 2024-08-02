import { getChallenges, JoinedChallenge } from 'services/challenge-service';

import { Button } from 'components/Button';
import Challenge from 'components/Challenge';

const Challenges = ({ challenges }: { challenges: JoinedChallenge[] }) => {
  return (
    <>
      {challenges.map(
        ({
          name,
          image,
          accent,
          accent2,
          slug,
          category,
          difficulty,
          designers
        }) => (
          <Challenge
            key={name}
            image={image}
            name={name}
            slug={slug}
            difficulty={difficulty}
            category={category}
            accent={accent}
            accent2={accent2}
            designers={designers.map(({ name }) => name)}
          />
        )
      )}
    </>
  );
};

export default Challenges;
