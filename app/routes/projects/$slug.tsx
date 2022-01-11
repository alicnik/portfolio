import * as React from 'react';
import { LoaderFunction, useLoaderData } from 'remix';
import invariant from 'tiny-invariant';
import { GitHubIcon, GlobeIcon } from '~/components/icons';
import { ExternalLink, ExternalLinkProps } from '~/components/ui';
import projects from '~/data/projects';
import { Project } from '~/types';

export const loader: LoaderFunction = ({ params }): Project => {
	const projectSlug = params.slug;
	invariant(projectSlug, 'Expeced params.slug');
	const project = projects.find((project) => project.slug === projectSlug);
	if (!project) {
		throw new Error('Could not find that project');
	}
	return project;
};

export default function SingleProject() {
	const project = useLoaderData<Project>();

	return (
		<article className="container mx-auto">
			<h1 className="text-3xl font-display mb-6">{project.name}</h1>
			<img
				src={project.image}
				alt={project.name}
				className="w-full aspect-video"
			/>
			<div className="flex flex-wrap gap-x-3 gap-y-2 my-4">
				{project.stack.map((technology) => (
					<span
						key={technology}
						className="w-max inline-block px-2 text-sm border rounded"
					>
						{technology}
					</span>
				))}
			</div>
			<p className="my-6">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
				distinctio, fugit nemo aut voluptatum laborum. Aspernatur nemo explicabo
				quisquam iste suscipit esse, culpa voluptates quos ipsam corporis, amet
				ipsa? Vero alias facilis saepe quis beatae rerum quasi nesciunt
				voluptatem corrupti labore magni nisi iure, iste pariatur, eligendi
				cupiditate.
			</p>
			{project.url && (
				<StyledExternalLink
					to={project.url}
					icon={<GlobeIcon />}
					label="Deployment link"
					text={project.responsive ? 'Deployment' : 'Deployment (desktop only)'}
				/>
			)}
			<div>
				{project.githubSecondary ? (
					<>
						<StyledExternalLink
							to={project.githubPrimary}
							icon={<GitHubIcon />}
							label="GitHub front-end repository link"
							text="Front-end Repository"
						/>
						<br />
						<StyledExternalLink
							to={project.githubSecondary}
							icon={<GitHubIcon />}
							label="GitHub back-end repository link"
							text="Back-end Repository"
						/>
					</>
				) : (
					<StyledExternalLink
						to={project.githubPrimary}
						icon={<GitHubIcon />}
						label="GitHub repository link"
						text="GitHub Repository"
					/>
				)}
			</div>
		</article>
	);
}

interface StyledExternalLinkProps extends ExternalLinkProps {
	icon: JSX.Element;
	label: string;
	text: string;
}

function StyledExternalLink({
	to,
	label,
	text,
	icon,
}: StyledExternalLinkProps) {
	return (
		<ExternalLink to={to} className="inline-flex items-center gap-2">
			{React.cloneElement(icon, {
				label,
				className: 'scale-125 z-[-1]',
			})}
			<span>{text}</span>
		</ExternalLink>
	);
}
