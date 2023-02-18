'use client';

import { useMemo, useState } from 'react';

import challengesData from 'data/challenges.json';

import Challenge from 'components/Challenge';
import DropdownDifficulties from 'components/DropdownDifficulties';

export default function Home() {
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  // just in case
  const challenges = useMemo(
    () =>
      difficultyFilter === 'All'
        ? challengesData
        : challengesData.filter(challenge =>
            difficultyFilter.includes(challenge.difficulty)
          ),
    [difficultyFilter]
  );

  return (
    <section className="flex flex-col space-y-10">
      <div className="flex flex-wrap items-center gap-3 lg:gap-5">
        <p className="text-brand text-2xl leading-relaxed">Difficulty</p>
        <DropdownDifficulties onChange={setDifficultyFilter} />
        <p className="text-brand text-2xl leading-relaxed">
          /{challenges.length}{' '}
          {challenges.length > 1 ? 'challenges' : 'challenge'}
        </p>
      </div>
      {challenges.map(
        ({
          name,
          description,
          image,
          difficulty,
          category,
          accent,
          accent2,
          slug
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
