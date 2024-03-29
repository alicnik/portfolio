import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { ProjectCard } from '~/components/common';
import { Button, ExternalLink, HomepageIllustration } from '~/components/ui';
import { db } from '~/lib/db.server';

export const links: LinksFunction = () => {
	// Preload images for projects that appear above the fold to minimise loading time
	const preloadLinks = [
		'/images/shuttle-sm.png',
		'/images/trello-sm.png',
		'/images/portfolio-sm.webp',
	].map((href) => ({
		rel: 'preload',
		as: 'image',
		href,
	}));

	return preloadLinks;
};

export const meta: MetaFunction = () => [
	{ title: 'Alex Nicholas | Front-End Developer' },
	{ property: 'og:title', content: 'Alex Nicholas | Front-End Developer' },
	{
		name: 'description',
		content:
			'Alex is a front-end developer working with React, TypeScript, Next.js, Remix, and any other tool he can get his hands on.',
	},
	{
		property: 'og:description',
		content:
			'Alex is a front-end developer working with React, TypeScript, Next.js, Remix, and any other tool he can get his hands on.',
	},
	{ property: 'og:url', content: 'https://alexnicholas.dev/' },
	{
		property: 'og:image',
		content: 'https://alexnicholas.dev/images/illustration.webp',
	},
];

export const loader = async () => {
	const recentProjects = await db.project.findMany({
		where: { showOnHomePage: true },
		include: { technologies: true },
		orderBy: { projectDate: 'desc' },
		take: 3,
	});
	return recentProjects;
};

export default function Index() {
	const recentProjects = useLoaderData<typeof loader>();

	return (
		<div className="w-full">
			<section className="md:grid grid-cols-5 gap-12 items-center md:my-16 lg:my-24">
				<div className="col-span-2">
					<h1 className="text-5xl font-graphic md:text-6xl">Alex Nicholas</h1>
					<h2 className="text-xl font-sans md:mb-6 lg:text-2xl">
						Front-End Web Developer
					</h2>
					<HomepageIllustration className="py-8 md:hidden" />
					<ExternalLink to="/assets/cv.pdf" underlined={false}>
						<Button
							variant="outlined"
							className="mx-auto mb-12 md:mx-0 md:mb-8"
						>
							View CV
						</Button>
					</ExternalLink>
				</div>
				<HomepageIllustration className="mobile:hidden md:block col-span-3" />
			</section>
			<section className="w-full">
				<h2 className="mt-6 mb-8 font-display text-4xl">Recent projects</h2>
				<div className="grid gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 place-items-center items-stretch">
					{recentProjects.map((project, index) => (
						<ProjectCard
							key={project.name}
							className={
								index === 1
									? 'mobile:hidden md:flex'
									: index === 2
									? 'mobile:hidden md:hidden lg:flex'
									: ''
							}
							{...project}
							projectDate={new Date(project.projectDate)}
						/>
					))}
				</div>
				<Link to="/projects">
					<Button variant="outlined" className="mx-auto my-6">
						See more projects
					</Button>
				</Link>
			</section>
		</div>
	);
}
