import { Arrow, Interfaces } from 'doodle-icons';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import sectionHeaderQuests from 'public/section-header-quests.png';
import { getChallenges } from 'services/challenge-service';

import Challenges from 'components/Challenges';
import Designers from 'components/Designers';
import { SectionTitle } from 'components/SectionTitle';

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
    images: ['https://codedesign.dev/code-design.png']
  }
};

export default async function Home() {
  const { challenges } = await getChallenges({
    limit: 2
  });

  return (
    <section className="flex flex-col">
      <div className="flex mb-10">
        <SectionTitle>Challenges</SectionTitle>
        <Link
          href="/challenges"
          className="ml-auto self-center text-brand text-2xl flex items-center hover:opacity-80"
        >
          View all challenges
          <Arrow.ArrowRight fill="currentColor" className="ml-4 w-8" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <Challenges challenges={challenges} />
      </div>

      <div className="flex mt-20 mb-10">
        <SectionTitle variant="rose">Designers</SectionTitle>
      </div>
      <Designers />
    </section>
  );
}
