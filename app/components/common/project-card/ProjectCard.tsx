import clsx from 'clsx';
import { Link } from 'remix';
import { GitHubIcon } from '~/components/icons';
import { ExternalLink } from '~/components/ui';
import { Project } from '~/types';

export function ProjectCard({
	name,
	slug,
	summary,
	url,
	githubPrimary,
	thumbnail,
	responsive,
}: Project) {
	return (
		<div className="px-6 py-8 my-6 border rounded border-gray-300 dark:border-gray-600">
			<Link to={`/projects/${slug}`} className="flex flex-col gap-4 mb-6">
				<h3 className="font-display text-xl mb-2 underline underline-offset-4">
					{name}
				</h3>
				<img
					src={thumbnail}
					alt={name}
					className={clsx('rounded shadow aspect-video w-full')}
				/>
				<p>{summary}</p>
			</Link>
			{name === 'Portfolio Website' || !url ? (
				<ExternalLink to={githubPrimary} className="flex items-center gap-2">
					<GitHubIcon label="GitHub repository link" />
					<span className="underline underline-offset-2">
						GitHub respository
					</span>
				</ExternalLink>
			) : (
				<div className="flex items-center pr-2">
					<ExternalLink
						to={url}
						className="underline underline-offset-2 mr-auto"
					>
						{responsive ? 'Deployment' : 'Deployment (desktop only)'}
					</ExternalLink>
					<ExternalLink to={githubPrimary}>
						<GitHubIcon label="GitHub repository link" />
					</ExternalLink>
				</div>
			)}
		</div>
	);
}
