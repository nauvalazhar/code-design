import clsx from "clsx";
import { Arrow, Interfaces } from "doodle-icons";
import Image from "next/image";
import Link from "next/link";
import Meta from "./Meta";

function Challenge({
  name,
  shortDescription,
  difficulty,
  category,
  accent,
  accent2,
  image,
  slug,
}) {
  const rotation =
    Math.ceil(Math.random() * 3) * (Math.round(Math.random()) ? 1 : -1);

  return (
    <article
      className={clsx(
        "px-20 py-20 relative",
        "bg-[var(--accent)] border-4 border-black",
        "shadow-solid"
      )}
      style={{
        "--accent": accent,
        "--accent-2": accent2,
      }}
    >
      <div className="flex -mx-4">
        <div className="w-5/12 px-4">
          <h2 className="text-4xl mb-2 font-display">{name}</h2>
          <p className="text-xl text-black/60 mb-10 leading-tight">
            {shortDescription}
          </p>
          <Link
            href={`/challenge/${slug}`}
            className={clsx(
              "inline-flex items-center px-8 py-4",
              "font-display",
              "border-2 border-black bg-[var(--accent-2)]"
            )}
          >
            View Challenge
            <Arrow.ArrowRight width="20" className="ml-4" />
          </Link>
          <div className="flex items-center mt-16 space-x-8">
            <Meta
              icon={Interfaces.Dashboard2}
              name="Difficulty"
              value={difficulty}
            />
            <Meta
              icon={Interfaces.FolderEmpty}
              name="Category"
              value={category}
            />
          </div>
        </div>
        <div className="w-6/12 px-4 ml-auto">
          <div
            className="relative"
            style={{
              boxShadow: "10px 10px 0px var(--accent-2)",
              transform: `rotate(${rotation}deg)`,
            }}
          >
            <div className="w-3 h-3 border-2 border-black bg-white absolute -top-1 -left-1 z-10" />
            <div className="w-3 h-3 border-2 border-black bg-white absolute -top-1 -right-1 z-10" />
            <div className="w-3 h-3 border-2 border-black bg-white absolute -bottom-1 -left-1 z-10" />
            <div className="w-3 h-3 border-2 border-black bg-white absolute -bottom-1 -right-1 z-10" />
            <Image
              alt={name}
              src={image}
              width={500}
              height={338}
              placeholder="blur"
              className="border-4 border-black h-[338px] object-cover object-top"
              blurDataURL={image.replace(/^\//g, "/thumbs/")}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default Challenge;
