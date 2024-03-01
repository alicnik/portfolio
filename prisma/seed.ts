import { PrismaClient } from '@prisma/client';
import { projects, testimonials } from './data';

const db = new PrismaClient();

async function seed() {
  await Promise.all([
    db.project.deleteMany(),
    db.technology.deleteMany(),
    db.testimonial.deleteMany(),
  ]);

  for (const project of projects) {
    await db.project.create({
      data: {
        ...project,
        technologies: {
          connectOrCreate: project.technologies.map((technology) => ({
            where: { id: technology.id },
            create: technology,
          })),
        },
      },
    });
  }

  await Promise.all(
    testimonials.map((testimonial) =>
      db.testimonial.create({
        data: testimonial,
      }),
    ),
  );
}

seed()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
