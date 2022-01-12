import { Link, LinksFunction } from 'remix';
import projects from '~/data/projects';
import { Button, ExternalLink, HomepageIllustration } from '~/components/ui';
import { ProjectCard } from '~/components/common';

export const links: LinksFunction = () => {
	// Preload images for projects that appear above the fold to minimise loading time
	const preloadLinks = [];
	const projectImages = projects.slice(0, 3).map((p) => p.thumbnail);

	for (const image of projectImages) {
		if (!image) continue;
		preloadLinks.push({
			rel: 'preload',
			as: 'image',
			href: image,
		});
	}

	return preloadLinks;
};

export default function Index() {
	return (
		<div className="container">
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
			<section>
				<h2 className="mt-6 mb-8 font-display text-4xl">Recent projects</h2>
				<div className="grid gap-6 items-stretch md:grid-cols-2 lg:grid-cols-3">
					{projects.slice(0, 3).map((project, index) => (
						<ProjectCard
							key={project.name}
							className={
								index === 1
									? 'mobile:hidden md:block'
									: index === 2
									? 'mobile:hidden md:hidden lg:block'
									: ''
							}
							{...project}
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
