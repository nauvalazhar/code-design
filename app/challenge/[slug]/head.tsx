import challengeData from 'data/challenges';

export default async function Head({ params }) {
  const challenge = challengeData.find(
    challenge => challenge.slug === params.slug
  );

  return (
    <>
      <title>{`${challenge?.name} – Code The Design`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={challenge?.description.slice(0, 155)} />
      <link rel="icon" href="/code-the-design.svg" />
      <meta
        name="keywords"
        content="code the design, design with figma, design web, design challenge"
      />
    </>
  );
}
