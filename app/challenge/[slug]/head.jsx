export default function Head({ params }) {
  const titleize = (slug) =>
    slug
      .split("-")
      .map(
        (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
      )
      .join(" ");

  return (
    <>
      <title>{` The Code Design | ${titleize(params.slug)}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Level up your coding skills with hands-on design challenges."
      />
      <link rel="icon" href="/code-the-design.svg" />
      <meta
        name="keywords"
        content="code the design, design with figma, design web, design challange"
      />
    </>
  );
}
