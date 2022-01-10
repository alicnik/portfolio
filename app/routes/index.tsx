import { LinksFunction } from 'remix';
import projects from '~/projects/manifest';
import { Button, HomepageIllustration } from '~/components/ui';
import { ProjectCard } from '~/components/common';

export const links: LinksFunction = () => [
	{ rel: 'preload', as: 'image', href: projects[0].thumbnail },
];

export default function Index() {
	return (
		<div className="container">
			<h1 className="text-5xl font-graphic mt-4">Alex Nicholas</h1>
			<h2 className="text-xl font-sans">Front-End Web Developer</h2>
			<HomepageIllustration />
			<h2 className="my-8 font-display text-4xl">Recent projects</h2>
			{projects.map((project) => (
				<ProjectCard key={project.name} {...project} />
			))}
		</div>
	);
}
