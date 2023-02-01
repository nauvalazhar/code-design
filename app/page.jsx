"use client";
import { Listbox } from "@headlessui/react";
import { useState } from "react";
import Challenge from "../components/Challenge";
import challenges from "../data/challenges.json";
import { ChevronDownIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const difficulty = [
    "All",
    ...new Set(challenges.map((challenge) => challenge.difficulty)),
  ];
  const [difficultyFilter, setDifficultyFilter] = useState(difficulty[0]);

  return (
    <section className="flex flex-col space-y-20">
      <div className="flex items-center gap-5">
        <p className="text-2xl leading-relaxed text-brand">Difficulty</p>
        <Listbox value={difficultyFilter} onChange={setDifficultyFilter}>
          <div className="relative mt-1 w-[20%]">
            <Listbox.Button className="flex w-full cursor-default items-center justify-between gap-10 border-4 border-black bg-white py-2 px-3 text-left text-lg focus:outline-none focus-visible:ring-0">
              <span className="block truncate">{difficultyFilter}</span>
              <ChevronDown />
            </Listbox.Button>
            <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto border-4 border-black bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {difficulty.map((diff, i) => (
                <Listbox.Option
                  key={i}
                  className={`${
                    diff === difficultyFilter && "bg-brand/50"
                  } relative cursor-default select-none truncate py-2 px-4 text-lg text-black/80 hover:bg-brand/20`}
                  value={diff}
                >
                  {diff}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
        <p className="text-2xl leading-relaxed text-brand">
          /
          {difficultyFilter !== "All"
            ? challenges.filter((data) =>
                difficultyFilter.includes(data.difficulty)
              ).length
            : challenges.length}{" "}
          challanges
        </p>
      </div>
      {difficultyFilter !== "All"
        ? challenges
            .filter((data) => difficultyFilter.includes(data.difficulty))
            .map(
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
        : challenges.map(
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
          )}
    </section>
  );
}
