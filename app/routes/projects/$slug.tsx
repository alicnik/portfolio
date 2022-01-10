import { LoaderFunction, useLoaderData } from 'remix';
import invariant from 'tiny-invariant';
import projects from '~/projects/manifest';
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
		<div className="container">
			<h1 className="text-3xl font-display">{project.name}</h1>
			<img
				src={project.image}
				alt={project.name}
				className="w-full aspect-video"
			/>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
				distinctio, fugit nemo aut voluptatum laborum. Aspernatur nemo explicabo
				quisquam iste suscipit esse, culpa voluptates quos ipsam corporis, amet
				ipsa? Vero alias facilis saepe quis beatae rerum quasi nesciunt
				voluptatem corrupti labore magni nisi iure, iste pariatur, eligendi
				cupiditate, ad dolorem quibusdam! Ex impedit iure expedita at illo
				explicabo, repudiandae nihil! Reprehenderit molestias velit pariatur
				illo quisquam minus nulla dignissimos. Hic expedita dolores similique!
				Ipsum iusto labore rem accusamus itaque mollitia veniam distinctio?
				Expedita temporibus eaque consequatur saepe, deserunt dolor laudantium
				voluptate sint? Voluptas magnam in exercitationem atque reiciendis autem
				quasi!
			</p>
		</div>
	);
}
