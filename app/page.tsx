"use client";

import clsx from "clsx";
import Challenge from "components/Challenge";
import DropdownDifficulties from "components/DropdownDifficulties";
import challengesData from "data/challenges";
import { Difficulty } from "data/difficulties";
import { useMemo, useState } from "react";

const MAX_DESC_LENGTH = 100;

export type Category = "All Categories" | "App" | "Component" | "Page";

export default function Home() {
  const categories: Category[] = ["All Categories", "App", "Component", "Page"];
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty>("All");
  const [categoryFilter, setCategoryFilter] =
    useState<Category>("All Categories");
  // just in case
  const challenges = useMemo(
    () =>
      difficultyFilter === "All" && categoryFilter === "All Categories"
        ? challengesData
        : challengesData.filter(
            (challenge) =>
              (difficultyFilter === "All" ||
                challenge.difficulty === difficultyFilter) &&
              (categoryFilter === "All Categories" ||
                challenge.category === categoryFilter)
          ),
    [categoryFilter, difficultyFilter]
  );

  return (
    <section className="flex flex-col space-y-10">
      <div className="flex flex-wrap items-center gap-3 lg:gap-5">
        <p className="text-brand text-2xl leading-relaxed">Difficulty</p>
        <DropdownDifficulties onChange={setDifficultyFilter} />
        <p className="text-brand text-2xl leading-relaxed">
          /{challenges.length}{" "}
          {challenges.length > 1 ? "challenges" : "challenge"}
        </p>
      </div>
      <div className="flex flex-wrap gap-5">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={clsx(
              "px-5 py-2 bg-brand font-bold",
              categoryFilter === category && "border-4 border-black"
            )}
            onClick={() => setCategoryFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {challenges.length ? (
        challenges.map(
          ({
            name,
            description,
            image,
            difficulty,
            category,
            accent,
            accent2,
            slug,
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
        )
      ) : (
        <div className="p-12 bg-white/50 text-center">
          <span className="font-bold">No Design Result</span>
        </div>
      )}
    </section>
  );
}
