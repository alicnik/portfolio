import { GitHubLogoIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import { Link } from 'remix';
import { Project } from '~/types';

export function ProjectCard({
	name,
	description,
	url,
	githubPrimary,
	thumbnail,
}: Project) {
	return (
		<div className="p-6 border rounded border-gray-300">
			<Link to={`/projects/${name}`} className="flex flex-col gap-4 mb-3">
				<h3 className="font-display text-lg underline underline-offset-4">
					{name}
				</h3>
				<img
					src={thumbnail}
					alt={name}
					className={clsx('rounded shadow aspect-video w-full')}
				/>
				<p>{description}</p>
			</Link>
			<div className="flex items-center pr-2">
				<a
					className="underline underline-offset-2 mr-auto"
					href={url}
					target="_blank"
				>
					Deployment
				</a>
				<a href={githubPrimary} target="_blank">
					<GitHubLogoIcon className="scale-125" />
				</a>
			</div>
		</div>
	);
}
