import { Link } from '@remix-run/react';
import clsx from 'clsx';
import { GitHubIcon } from '~/components/icons';
import { ExternalLink } from '~/components/ui';

import type { Project } from '~/types';

interface ProjectCardProps extends Project {
	className?: string;
}

export function ProjectCard({
	name,
	summary,
	slug,
	url,
	githubPrimary,
	thumbnail,
	responsive,
	className,
}: ProjectCardProps) {
	const resolvedUrl =
		name === 'Portfolio Website' || !url ? githubPrimary : url;

	return (
		<div
			className={clsx(
				'flex flex-col px-6 py-8 my-6 border rounded border-gray-300 dark:border-gray-600 max-w-[350px]',
				className,
			)}
		>
			<Link
				to={`/projects/${slug}`}
				className="flex flex-col flex-1 gap-4 mb-6"
			>
				<h3 className="font-display text-xl mb-2 underline underline-offset-4">
					{name}
				</h3>
				{thumbnail ? (
					<img
						src={thumbnail}
						alt={name}
						className={clsx('rounded shadow aspect-video w-full')}
					/>
				) : (
					<div className="rounded border shadow border-gray-200 dark:border-gray-600 bg-gray-200 dark:bg-gray-900 bg-opacity-20 flex justify-center items-center w-full aspect-video font-graphic text-3xl">
						{name}
					</div>
				)}
				<p>{summary}</p>
			</Link>

			<div className="flex items-center pr-2">
				<ExternalLink
					to={resolvedUrl}
					className="underline underline-offset-2 mr-auto"
				>
					{resolvedUrl === githubPrimary
						? 'GitHub repository'
						: responsive
						? 'Deployment (responsive)'
						: 'Deployment (desktop only)'}
				</ExternalLink>
				<ExternalLink to={githubPrimary}>
					<GitHubIcon label="GitHub repository link" />
				</ExternalLink>
			</div>
		</div>
	);
}
