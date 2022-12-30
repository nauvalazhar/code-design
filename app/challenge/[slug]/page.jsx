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
      }}>
      <FigmaPreview src={challenge.figma} />

      <div className="flex gap-10">
        <div className="w-8/12">
          <div
            className={clsx(
              'px-20 py-20 relative',
              'bg-[var(--accent)] border-4 border-black',
              'shadow-solid'
            )}>
            <h1 className="text-4xl font-display">{challenge.name}</h1>
            <p className="mt-3 text-lg text-black/60 leading-relaxed">
              {challenge.description}
            </p>
            <h2 className="text-2xl font-display mt-10 mb-2">How to Start</h2>
            <p className="text-xl leading-relaxed">
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
              Finally, it's time to start implementing the design into code! Use
              your exported assets and the design file as a reference as you
              work to create a functional and visually appealing implementation
              of the design.
            </p>
          </div>
        </div>
        <div className="w-4/12 space-y-10">
          <div
            className={clsx(
              'px-10 py-10 relative',
              'bg-brand border-4 border-black',
              'shadow-solid'
            )}>
            <a
              href={challenge.figma}
              className="flex justify-center items-center border-2 border-black py-4 text-2xl bg-[#2AE876] gap-4">
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
                target="_blank">
                Read The License
              </a>
            </p>
          </div>
          <div
            className={clsx(
              'px-10 py-10 relative',
              'bg-[#00FABE] border-4 border-black',
              'space-y-8',
              'shadow-solid'
            )}>
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
