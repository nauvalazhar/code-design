import clsx from 'clsx';
import { Arrow, Interfaces } from 'doodle-icons';
import Image from 'next/image';
import Link from 'next/link';

export type ChallengeProps = {
  name: string;
  difficulty: string;
  category: string;
  accent: string;
  accent2: string;
  image: string;
  slug: string;
  designers: string[];
};

function Challenge({
  name,
  difficulty,
  category,
  accent,
  accent2,
  image,
  slug,
  designers
}: ChallengeProps) {
  return (
    <Link href={`/challenge/${slug}`}>
      <article
        className={clsx(
          'relative p-8 rounded-3xl',
          'border-4 border-black bg-[var(--accent)]',
          'hover:scale-105 transition-all'
        )}
        style={{
          '--accent': accent,
          '--accent-2': accent2,
          boxShadow: '6px 6px 0 var(--accent-2)'
        }}
      >
        <div className="aspect-[1.48/1] object-cover w-full relative">
          <Image
            alt={name}
            src={`${image}?s=1000`}
            className="border-4 border-black object-cover object-top"
            fill
          />
        </div>
        <h2 className="mt-6 text-black font-semibold mb-2 text-3xl">{name}</h2>
        <p className="text-black">
          Design by <span className="font-semibold">{designers[0]}</span>{' '}
          {designers.length > 1 && `+ ${designers.length - 1} others`}
        </p>
        <div className="flex border-t-2 border-black -mx-8 -mb-8 mt-8">
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
      </article>
    </Link>
  );
}

type MetaProps = {
  icon: React.ElementType<React.SVGProps<SVGSVGElement>>;
  name: string;
  value: string;
};

function Meta({ icon: Icon, name, value }: MetaProps) {
  return (
    <div className="flex-1 flex items-start px-8 py-8 border-r-2 border-black last:border-0">
      <Icon width={30} className="mt-2 text-black/40" fill="currentColor" />
      <div className="ml-6 flex flex-col">
        <span className="text-black/60 text-sm">{name}</span>
        <span className="mt-1 text-black font-semibold">{value}</span>
      </div>
    </div>
  );
}

export default Challenge;
