import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import * as React from 'react';
import invariant from 'tiny-invariant';
import { GitHubIcon, GlobeIcon } from '~/components/icons';
import type { ExternalLinkProps } from '~/components/ui';
import { ExternalLink } from '~/components/ui';
import { db } from '~/lib/db.server';

export const loader = async ({ params }: LoaderFunctionArgs) => {
	const { slug } = params;
	invariant(slug, 'Expected params.slug');

	const project = await db.project.findUnique({
		where: { slug },
		include: { technologies: true },
	});

	if (!project) throw new Error(`Could not find project with slug "${slug}"`);

	return project;
};

export const meta: MetaFunction<typeof loader> = ({ data }) => [
	{ title: `AN | ${data?.name}` },
	{ name: 'description', content: data?.summary },
	{ property: 'og:description', content: data?.summary },
	{ property: 'og:title', content: `AN | Projects | ${data?.name}` },
	{
		property: 'og:url',
		content: `https://alexnicholas.dev/projects/${data?.slug}/`,
	},
	{
		property: 'og:image',
		content: `https://alexnicholas.dev${
			data?.thumbnail ?? '/images/illustration.webp'
		}`,
	},
];

export default function SingleProjectRoute() {
	const project = useLoaderData<typeof loader>();

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
