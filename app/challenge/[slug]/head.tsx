// @ts-ignore
import challengeData from 'data/challenges';

export default async function Head({ params }) {
  const challenge = challengeData.find(
    challenge => challenge.slug === params.slug
  );

  return (
    <>
      <title>{`${challenge?.name} – Code The Design`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="canonical"
        href={`https://codedesign.dev/challenge/${challenge.slug}`}
      />
      <link rel="icon" href="/code-the-design.svg" />
      <meta name="theme-color" content={challenge.accent} />
      <meta http-equiv="content-language" content="en" />
      <meta name="description" content={challenge?.description.slice(0, 155)} />
      <meta
        name="keywords"
        content="code the design, design with figma, design web, design challenge"
      />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:url"
        content={`https://codedesign.dev/challenge/${challenge.slug}`}
      />
      <meta property="og:site_name" content="codedesign.dev" />
      <meta
        property="og:title"
        content={`${challenge?.name} – Code The Design`}
      />
      <meta
        property="og:description"
        content={challenge?.description.slice(0, 155)}
      />
      <meta
        property="og:image"
        content={`https://codedesign.dev${challenge.image}`}
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`https://codedesign.dev/challenge/${challenge.slug}`}
      />
      <meta
        property="twitter:title"
        content={`${challenge?.name} – Code The Design`}
      />
      <meta
        property="twitter:description"
        content={challenge?.description.slice(0, 155)}
      />
      <meta
        property="twitter:image"
        content={`https://codedesign.dev${challenge.image}`}
      />
    </>
  );
}
