import { Link, LinksFunction } from 'remix';
import projects from '~/projects/manifest';
import { Button, HomepageIllustration } from '~/components/ui';
import { ProjectCard } from '~/components/common';

export const links: LinksFunction = () => [
	{ rel: 'preload', as: 'image', href: projects[0].thumbnail },
];

export default function Index() {
	return (
		<div className="container">
			<h1 className="text-5xl font-graphic">Alex Nicholas</h1>
			<h2 className="text-xl font-sans">Front-End Web Developer</h2>
			<HomepageIllustration />
			<a href="/assets/cv.pdf" target="_blank">
				<Button variant="outlined" className="mx-auto mb-12 py-3 px-6">
					View CV
				</Button>
			</a>
			<h2 className="mt-6 mb-8 font-display text-4xl">Recent projects</h2>
			<ProjectCard {...projects[0]} />
			<Link to="/projects">
				<Button variant="outlined" className="mx-auto my-6 py-3 px-6">
					See more projects
				</Button>
			</Link>
		</div>
	);
}
