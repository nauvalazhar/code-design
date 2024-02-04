import { Button } from 'components/Button';
import Challenge from 'components/Challenge';
import { JoinedChallenge, getChallenges } from 'services/challenge-service';

const Challenges = ({ challenges }: { challenges: JoinedChallenge[] }) => {
  return (
    <>
      {challenges.map(
        ({
          name,
          description,
          image,
          accent,
          accent2,
          slug,
          category,
          difficulty,
        }) => (
          <Challenge
            key={name}
            image={image}
            name={name}
            slug={slug}
            shortDescription={description.substring(0, 100)}
            difficulty={difficulty}
            category={category}
            accent={accent}
            accent2={accent2}
          />
        )
      )}
    </>
  );
};

export default Challenges;
