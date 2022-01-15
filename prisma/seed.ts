import { PrismaClient } from '@prisma/client';
import { projects, feedback } from './seedData';

const db = new PrismaClient();

async function seed() {
	// Clear database
	console.log('\n🗑 Clearing database');
	await db.project.deleteMany();
	await db.package.deleteMany();

	// Seed database with projects, simultaneously creating packages
	// (or connecting to them if they are already present in db)
	for (const project of projects) {
		await db.project.create({
			data: {
				...project,
				stack: {
					connectOrCreate: project.stack.map((pkg) => ({
						where: { name: pkg.name },
						create: pkg,
					})),
				},
			},
		});
	}

	// Seed database with testimonials
	for (const f of feedback) {
		await db.feedback.create({
			data: {
				...f,
				length: f.value.length,
			},
		});
	}
}

seed()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await db.$disconnect();
	});
