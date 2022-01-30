import { LoaderFunction, useLoaderData } from 'remix';
import { ProjectCard } from '~/components/common';
import { db } from '~/lib/db.server';
import { Project } from '@prisma/client';

type LoaderType = Project[];

export const loader: LoaderFunction = async () => {
	const data = await db.project.findMany();
	const projects = data.sort((a, b) => {
		if (a.projectDate < b.projectDate) return 1;
		if (a.projectDate > b.projectDate) return -1;
		return 0;
	});

	return projects;
};

export default function ProjectsRoute() {
	const projects = useLoaderData<LoaderType>();

	return (
		<div className="container">
			<h1 className="text-3xl font-display mb-6">Projects</h1>
			<p>
				Here are some of my side projects. Like most devs, I love tinkering and
				have a number of works in progress. But these are the ones that got the
				most love. I'm a React developer first and foremost, so most of these
				use React. Having worked with TypeScript, I can't contemplate React
				without it, so my more recent work is properly typed.
			</p>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center items-stretch">
				{projects.map((project) => (
					<ProjectCard key={project.name} {...project} />
				))}
			</div>
		</div>
	);
}
