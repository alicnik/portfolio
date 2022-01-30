import * as React from 'react';
import { LoaderFunction, useLoaderData } from 'remix';
import invariant from 'tiny-invariant';
import { GitHubIcon, GlobeIcon } from '~/components/icons';
import { ExternalLink, ExternalLinkProps } from '~/components/ui';
import { Technology, Project } from '@prisma/client';
import { db } from '~/lib/db.server';

type LoaderType = Project & { technologies: Technology[] };

export const loader: LoaderFunction = async ({ params }) => {
	const projectSlug = params.slug;
	invariant(projectSlug, 'Expeced params.slug');

	const project = await db.project.findUnique({
		where: { slug: projectSlug },
		include: { technologies: true },
	});

	if (!project) throw new Error('Could not find that project');

	return project;
};

export default function SingleProject() {
	const project = useLoaderData<LoaderType>();

	return (
		<article className="container mx-auto">
			<h1 className="text-4xl mb-6 md:text-5xl font-graphic md:mb-8">
				{project.name}
			</h1>
			{project.image ? (
				<img
					src={project.image}
					alt={project.name}
					className="w-full aspect-video rounded"
				/>
			) : null}
			<div className="flex flex-wrap gap-x-3 gap-y-2 my-6">
				{project.technologies.map((technology) => (
					<ExternalLink
						key={technology.id}
						to={technology.url}
						underlined={false}
						className="w-max inline-block px-2 py-[2px] text-sm border rounded"
					>
						{technology.name}
					</ExternalLink>
				))}
			</div>
			<div className="my-6">
				{project.description.split('\n').map((paragraph) => (
					<p key={paragraph} className="pb-4">
						{paragraph}
					</p>
				))}
			</div>
			{project.url && (
				<StyledExternalLink
					to={project.url}
					icon={<GlobeIcon />}
					label="Deployment link"
					text={
						project.responsive
							? 'Deployment (responsive)'
							: 'Deployment (desktop only)'
					}
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
