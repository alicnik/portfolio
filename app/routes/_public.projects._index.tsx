import { useLoaderData } from '@remix-run/react';
import { ProjectCard } from '~/components/common';
import type { MetaFunction } from '@remix-run/node';
import { db } from '~/lib/db.server';

export const loader = async () => {
	const projects = await db.project.findMany({
		include: {
			technologies: true,
		},
		orderBy: {
			projectDate: 'desc',
		},
	});

	return projects;
};

export const meta: MetaFunction = () => [
	{ title: 'AN | Projects' },
	{
		name: 'description',
		content:
			'Here are some of my side projects. Like most devs, I love tinkering and have a number of works in progress. But these are the ones that got the most love.',
	},
	{
		property: 'og:description',
		content:
			'Here are some of my side projects. Like most devs, I love tinkering and have a number of works in progress. But these are the ones that got the most love.',
	},
	{ property: 'og:title', content: 'Alex Nicholas | Projects' },
	{ property: 'og:url', content: 'https://alexnicholas.dev/projects/' },
	{
		property: 'og:image',
		content: 'https://alexnicholas.dev/images/illustration.webp',
	},
];

export default function ProjectIndexRoute() {
	const projects = useLoaderData<typeof loader>();

	return (
		<div className="container mx-auto">
			<h1 className="text-3xl font-display mb-6">Projects</h1>
			<p>
				Here are some of my side projects. Like most devs, I love tinkering and
				have a number of works in progress. But these are the ones that got the
				most love. I&apos;m a React developer first and foremost, so most of
				these use React. Having worked with TypeScript, I can&apos;t contemplate
				React without it, so my more recent work is properly typed.
			</p>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center items-stretch">
				{projects.map((project) => (
					<ProjectCard
						key={project.name}
						{...project}
						projectDate={new Date(project.projectDate)}
					/>
				))}
			</div>
		</div>
	);
}
