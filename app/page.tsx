import Challenges from 'components/Challenges';
import Designers from 'components/Designers';
import { Arrow, Interfaces } from 'doodle-icons';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getChallenges } from 'services/challenge-service';

export const metadata: Metadata = {
  title:
    'Level up your coding skills with hands-on design challenges – codedesign.dev',
  description: 'Level up your coding skills with hands-on design challenges.',
  keywords: 'code the design, design with figma, design web, design challange',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://codedesign.dev/',
    siteName: 'codedesign.dev',
    title: 'codedesign.dev',
    description: 'Level up your coding skills with hands-on design challenges.',
    images: ['https://codedesign.dev/code-design.png'],
  },
};

export default async function Home() {
  const { challenges } = await getChallenges({
    limit: 1,
  });

  return (
    <section className="flex flex-col">
      <div className="flex mb-10">
        <Interfaces.Shape
          className="w-10 text-orange-300"
          fill="currentColor"
        />
        <div className="ml-6">
          <h2 className="text-3xl text-orange-400 mb-2">Latest Challenge</h2>
          <p className="text-lg text-orange-200">
            Level up your coding skills with hands-on design challenges.
          </p>
        </div>
        <Link
          href="/challenges"
          className="ml-auto self-center text-orange-400 text-2xl flex items-center hover:text-orange-200">
          View All Challenges
          <Arrow.ArrowRight fill="currentColor" className="ml-4 w-8" />
        </Link>
      </div>
      <Challenges challenges={challenges} />

      <div className="flex">
        <Interfaces.PenTool
          className="w-10 text-green-300 mt-4"
          fill="currentColor"
        />
        <div className="ml-6">
          <h2 className="text-3xl text-green-400 mt-20 mb-2">Pixel Pioneers</h2>
          <p className="text-lg text-green-200 mb-10">
            Awarded to users who contribute outstanding UI/UX designs. This
            badge recognizes those who are setting trends and pushing the
            boundaries of digital design.
          </p>
        </div>
      </div>
      <Designers />
    </section>
  );
}
