import { challengesInitial } from 'data/challenges';
import dotenv from 'dotenv';
import { inArray } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { NewBadge, badges } from 'schemas/badges';
import { NewCategory, categories } from 'schemas/categories';
import {
  NewChallengeDesigner,
  challengeDesigners,
} from 'schemas/challenge_designers';
import { NewChallenge, challenges } from 'schemas/challenges';
import { NewDifficulty, difficulties } from 'schemas/difficulties';
import { type NewUserBadge, userBadges } from 'schemas/user_badges';
import { type NewUserLink, userLinks } from 'schemas/user_links';
import { type NewUser, type User, users } from 'schemas/users';
import { techSeed } from 'seeds/tech-seed';

const path =
  process.env.NODE_ENV === 'production'
    ? '.env.production.local'
    : '.env.development.local';

dotenv.config({
  path,
});

const client = postgres(process.env.SUPABASE_URL, { prepare: false });
const db = drizzle(client);

async function difficultiesSeed() {
  const data: NewDifficulty[] = [
    {
      name: 'Beginner',
    },
    {
      name: 'Easy',
    },
    {
      name: 'Intermediate',
    },
    {
      name: 'Advanced',
    },
    {
      name: 'Expert',
    },
    {
      name: 'Master',
    },
  ];

  await db.insert(difficulties).values(data);
}

async function categoriesSeed() {
  const data: NewCategory[] = [
    {
      name: 'App',
      slug: 'app',
    },
    {
      name: 'Page',
      slug: 'page',
    },
    {
      name: 'Component',
      slug: 'component',
    },
  ];

  await db.insert(categories).values(data);
}

async function badgesSeed() {
  const data: NewBadge[] = [
    {
      name: 'Pixel Pioneer',
      description:
        'Awarded to users who contribute outstanding UI/UX designs. This badge recognizes those who are setting trends and pushing the boundaries of digital design.',
    },
    {
      name: 'Code Catalysts',
      description:
        'Awarded to visionary contributors who ignite innovation and drive the evolution of the platform through code enhancements, feature developments, and documentation refinement.',
    },
    {
      name: 'Design Architect',
      description:
        'The Design Architect badge is bestowed upon the visionary builders of the Code The Design community. These creators translate abstract designs into tangible, functional realities, setting the foundation upon which our digital world is built. Their submissions are not just code; they are blueprints of innovation, shaping the future of technology with every line they write.',
    },
    {
      name: 'Code Curator',
      description:
        "The Code Curator badge is awarded to the guardians of quality and craftsmanship within the Code The Design ecosystem. These meticulous reviewers sift through submissions, ensuring that every piece of code not only meets the platform's standards but also enhances its overall integrity. Curators are the champions of excellence, dedicated to nurturing and preserving the art of coding.",
    },
  ];

  await db.insert(badges).values(data);
}

async function designersSeed() {
  const designersRaw = challengesInitial
    .map((challenge) => challenge.designer)
    .flat();
  // remove duplicates by name
  const designers = designersRaw.filter((designer, index) => {
    const _designer = designersRaw.findIndex((d) => d.name === designer.name);
    return _designer === index;
  });

  // sort 'Nauval' to the first index
  const nauval = designers.find((designer) => designer.name === 'Nauval');
  const nauvalIndex = designers.indexOf(nauval);
  designers.splice(nauvalIndex, 1);
  designers.unshift(nauval);

  for (const designer of designers) {
    const data: NewUser = {
      name: designer.name,
      avatar: designer.avatar,
    };

    try {
      await db.transaction(async (tx) => {
        const inserted = await tx.insert(users).values(data).returning();

        const userLink: NewUserLink = {
          name: 'Figma',
          link: designer.url,
          userId: inserted[0].id,
        };

        await tx.insert(userLinks).values(userLink);

        const userBadge: NewUserBadge = {
          userId: inserted[0].id,
          badgeId: 1,
        };

        await tx.insert(userBadges).values(userBadge);
      });
    } catch (error) {
      console.log(error);
    }
  }
}

async function challengesSeed() {
  const data = [...challengesInitial];
  data.reverse();

  for (const c of data) {
    try {
      await db.transaction(async (trx) => {
        const { designer, ...ch } = c;
        const cch = await trx.insert(challenges).values(ch).returning();

        const designers = await trx
          .select({
            id: users.id,
          })
          .from(users)
          .where(
            inArray(
              users.name,
              c.designer.map((d) => d.name)
            )
          );

        const cd: NewChallengeDesigner[] = designers.map((d) => ({
          challengeId: cch[0].id,
          userId: d.id,
        }));

        await trx.insert(challengeDesigners).values(cd);
      });
    } catch (error) {
      console.error(error);
    }
  }
}

async function seed() {
  // await difficultiesSeed();
  // await categoriesSeed();
  // await badgesSeed();

  // await designersSeed();
  // await challengesSeed();

  await techSeed(db);

  client.end();
}

seed();
