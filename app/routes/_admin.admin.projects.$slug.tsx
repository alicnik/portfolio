import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';
import { db } from '~/lib/db.server';

export const loader = async ({ params }: LoaderFunctionArgs) => {
	const { slug } = params;
	invariant(slug, 'No slug found');

	const project = await db.project.findUnique({
		where: { slug },
		include: { technologies: true },
	});

	return { project };
};

export default function AdminProjectRoute() {
	const { project } = useLoaderData<typeof loader>();
	return <pre>{JSON.stringify(project, null, 2)}</pre>;
}
