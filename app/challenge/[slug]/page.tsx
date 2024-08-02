import clsx from 'clsx';
import { Interfaces } from 'doodle-icons';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getChallengeBySlug } from 'services/challenge-service';

import FigmaPreview from 'components/FigmaPreview';
import Meta from 'components/Meta';
import { Step, Steps } from 'components/Steps';

export async function generateMetadata({ params: { slug } }) {
  const [challenge] = await getChallengeBySlug({ slug });

  return {
    title: challenge.name
  };
}

type Params = {
  params: {
    slug: string;
  };
};

async function Page({ params: { slug } }: Params) {
  const [challenge] = await getChallengeBySlug({ slug });

  if (!challenge) {
    notFound();
  }

  return (
    <div
      style={{
        '--accent': challenge.accent
      }}
    >
      <FigmaPreview src={challenge.figma} />

      <div className="flex flex-wrap gap-10 lg:flex-nowrap">
        <div className="w-full lg:w-8/12">
          <div
            className={clsx(
              'relative p-10 lg:p-16',
              'border-4 border-black bg-[#FFF8E4]',
              'shadow-solid text-black'
            )}
          >
            <h1 className="font-display text-2xl lg:text-4xl">
              {challenge.name}
            </h1>
            <h2 className="mt-10 mb-2 font-display text-xl lg:text-2xl">
              How to Start
            </h2>
            <Steps>
              <Step>
                Download the design file from the provided link to get all the
                needed design elements and assets.
              </Step>
              <Step>
                Take some time to look over the design and understand its
                layout, colors, fonts, and overall style.
              </Step>
              <Step>
                Export the necessary assets, like images and fonts, that
                you&apos;ll need for your code.
              </Step>
              <Step>
                Start coding the design, using the exported assets and design
                file to guide you in creating a functional and attractive
                implementation.
              </Step>
              <Step>Bring your own tech-stack!</Step>
            </Steps>
          </div>
        </div>
        <div className="w-full space-y-10 lg:w-4/12">
          <div
            className={clsx(
              'relative px-10 py-10',
              'border-4 border-black bg-brand',
              'shadow-solid'
            )}
          >
            <a
              href={challenge.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 border-2 border-black bg-[#2AE876] py-4 text-2xl text-black"
            >
              <Interfaces.Download
                width={24}
                height={24}
                strokeWidth={6}
                stroke="#000"
              />
              Download
            </a>
            <p className="mt-4 text-center text-lg">
              <a
                href="https://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                rel="noreferrer"
                className="text-black underline"
              >
                Read The License
              </a>
            </p>
          </div>
          <div
            className={clsx(
              'px-10 py-10 border-4 border-black text-black',
              'bg-rose-500 shadow-solid'
            )}
          >
            <h2 className="text-2xl font-semibold">
              UI {challenge.designers.length > 1 ? 'designers' : 'designer'}
            </h2>
            <div className="mt-4">
              {challenge.designers.map(designer => (
                <div key={designer.name} className="flex items-center mt-4">
                  <Image
                    src={designer.avatar}
                    alt={designer.name}
                    width={60}
                    height={60}
                    className="border-4 border-black object-cover rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-1">
                      {designer.name}
                    </h3>
                    <a
                      href={designer.links[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center hover:underline"
                    >
                      Visit Profile <ExternalLink width={18} className="ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={clsx(
              'relative px-10 py-10',
              'border-4 border-black bg-[#00FABE]',
              'space-y-8',
              'shadow-solid text-black'
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
