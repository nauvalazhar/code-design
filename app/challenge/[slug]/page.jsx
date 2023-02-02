import clsx from 'clsx';
import FigmaPreview from 'components/FigmaPreview';
import Meta from 'components/Meta';
import challenges from 'data/challenges.json';
import { Interfaces } from 'doodle-icons';

export async function generateStaticParams() {
  return challenges.map((challenge) => ({
    slug: challenge.slug,
  }));
}

async function getChallenge(slug) {
  const challenge = challenges.find((c) => c.slug === slug);

  return challenge;
}

async function Page({ params: { slug } }) {
  const challenge = await getChallenge(slug);

  return (
    <div
      style={{
        '--accent': challenge.accent,
      }}
    >
      <FigmaPreview src={challenge.figma} />

      <div className="flex flex-wrap gap-10 lg:flex-nowrap">
        <div className="w-full lg:w-8/12">
          <div
            className={clsx(
              'relative p-10 lg:p-20',
              'border-4 border-black bg-[var(--accent)]',
              'shadow-solid'
            )}
          >
            <h1 className="font-display text-2xl lg:text-4xl">
              {challenge.name}
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-black/60">
              {challenge.description}
            </p>
            <h2 className="font-display mt-10 mb-2 text-xl lg:text-2xl">
              How to Start
            </h2>
            <p className="text-lg leading-relaxed lg:text-xl">
              To begin the challenge, you will first need to download the design
              file from the provided link. This will give you access to all of
              the necessary design elements and assets that you will need to
              complete the challenge.
              <br />
              <br />
              Next, take some time to study the design and understand how it
              works. Look at the layout, color scheme, typography, and overall
              aesthetic to get a sense of the look and feel of the design.
              <br />
              <br />
              After you have a good understanding of the design, you can start
              exporting all of the necessary assets. This may include images,
              fonts, and other elements that you will need to use in your code.
              <br />
              <br />
              Finally, it&apos;s time to start implementing the design into
              code! Use your exported assets and the design file as a reference
              as you work to create a functional and visually appealing
              implementation of the design.
            </p>
          </div>
        </div>
        <div className="w-full space-y-10 lg:w-4/12">
          <div
            className={clsx(
              'relative px-10 py-10',
              'bg-brand border-4 border-black',
              'shadow-solid'
            )}
          >
            <a
              href={challenge.figma}
              target="_blank"
              className="flex items-center justify-center gap-4 border-2 border-black bg-[#2AE876] py-4 text-2xl"
            >
              <Interfaces.Download
                width={24}
                height={24}
                strokeWidth={6}
                stroke="#000"
              />
              Download Design
            </a>
            <p className="mt-4 text-center text-lg">
              <a
                href="https://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                rel="noreferrer"
              >
                Read The License
              </a>
            </p>
          </div>
          <div
            className={clsx(
              'relative px-10 py-10',
              'border-4 border-black bg-[#00FABE]',
              'space-y-8',
              'shadow-solid'
            )}
          >
            <Meta
              icon={Interfaces.Dashboard2}
              name="Difficulty"
              value={challenge.difficulty}
            />
            <Meta
              icon={Interfaces.FolderEmpty}
              name="Category"
              value={challenge.category}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
