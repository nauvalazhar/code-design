import clsx from 'clsx';
import { Arrow, Interfaces } from 'doodle-icons';
import Image from 'next/image';
import Link from 'next/link';

import Meta from './Meta';

const MAX_DESC_LENGTH = 100;

function Challenge({
  name,
  shortDescription,
  difficulty,
  category,
  accent,
  accent2,
  image,
  slug
}) {
  const rotation =
    Math.ceil(Math.random() * 3) * (Math.round(Math.random()) ? 1 : -1);

  return (
    <article
      className={clsx(
        'relative p-10 lg:p-20',
        'border-4 border-black bg-[var(--accent)]',
        'shadow-solid'
      )}
      style={{
        '--accent': accent,
        '--accent-2': accent2
      }}
    >
      <div className="flex flex-wrap gap-8 lg:gap-3">
        <div className="order-2 w-full lg:order-1 lg:w-5/12">
          <h2 className="mb-2 font-display text-2xl lg:text-4xl">{name}</h2>
          <p className="mb-10 text-xl leading-tight text-black/60">
            {shortDescription}{' '}
            {shortDescription.length === MAX_DESC_LENGTH && '...'}
          </p>
          <Link
            href={`/challenge/${slug}`}
            className={clsx(
              'inline-flex items-center px-8 py-4',
              'font-display',
              'border-2 border-black bg-[var(--accent-2)]'
            )}
          >
            View Challenge
            <Arrow.ArrowRight width="20" className="ml-4" />
          </Link>
          <div className="mt-16 flex flex-wrap items-center gap-6">
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
        <div className="order-1 w-full lg:order-2 lg:ml-auto lg:w-6/12">
          <div
            className="relative"
            style={{
              boxShadow: '10px 10px 0px var(--accent-2)',
              transform: `rotate(${rotation}deg)`
            }}
          >
            <div className="absolute -top-1 -left-1 z-10 h-3 w-3 border-2 border-black bg-white" />
            <div className="absolute -top-1 -right-1 z-10 h-3 w-3 border-2 border-black bg-white" />
            <div className="absolute -bottom-1 -left-1 z-10 h-3 w-3 border-2 border-black bg-white" />
            <div className="absolute -bottom-1 -right-1 z-10 h-3 w-3 border-2 border-black bg-white" />
            <div className="aspect-[1.48/1] w-full">
              <Image
                alt={name}
                src={image}
                placeholder="blur"
                fill
                className="border-4 border-black object-cover object-top"
                blurDataURL={image.replace(/^\//g, '/thumbs/')}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Challenge;
