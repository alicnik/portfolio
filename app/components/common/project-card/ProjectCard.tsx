import { GitHubLogoIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import { Link } from 'remix';
import { Project } from '~/types';
import { kebabCase } from 'lodash';

export function ProjectCard({
	name,
	summary,
	url,
	githubPrimary,
	thumbnail,
	responsive,
}: Project) {
	return (
		<div className="px-6 py-8 my-6 border rounded border-gray-300 dark:border-gray-600">
			<Link
				to={`/projects/${kebabCase(name)}`}
				className="flex flex-col gap-4 mb-6"
			>
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
				<a
					href={githubPrimary}
					target="_blank"
					className="flex items-center gap-2"
				>
					<GitHubLogoIcon className="scale-125" />
					<span className="underline underline-offset-2">
						GitHub respository
					</span>
				</a>
			) : (
				<div className="flex items-center pr-2">
					<a
						className="underline underline-offset-2 mr-auto"
						href={url}
						target="_blank"
					>
						{responsive ? 'Deployment' : 'Deployment (desktop only)'}
					</a>
					<a href={githubPrimary} target="_blank">
						<GitHubLogoIcon className="scale-125" />
					</a>
				</div>
			)}
		</div>
	);
}
