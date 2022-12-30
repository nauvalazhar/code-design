import Challenge from '../components/Challenge';
import challenges from '../data/challenges.json';

export default function Home() {
  return (
    <section className="flex flex-col space-y-20">
      {challenges.map(
        ({
          name,
          description,
          image,
          difficulty,
          category,
          accent,
          accent2,
          slug,
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
    </section>
  );
}
