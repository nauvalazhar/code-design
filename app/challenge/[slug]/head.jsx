import challangeData from 'data/challenges.json';

export default async function Head({ params }) {
  const { name, description } = challangeData.find(
    challange => challange.slug === params.slug
  );

  return (
    <>
      <title>{name} – Code The Design</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description.slice(0, 155)} />
      <link rel="icon" href="/code-the-design.svg" />
      <meta
        name="keywords"
        content="code the design, design with figma, design web, design challange"
      />
    </>
  );
}
