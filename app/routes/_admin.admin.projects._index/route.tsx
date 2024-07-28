import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { DataTable } from '~/components/admin';
import { db } from '~/lib/db.server';
import { columns } from './columns';

export const loader = async () => {
	const projects = await db.project.findMany({
		orderBy: { projectDate: 'desc' },
	});

	return json({ projects });
};

export default function AdminProjectsIndexRoute() {
	const { projects } = useLoaderData<typeof loader>();

	const data = projects.map((project) => ({
		...project,
		createdAt: new Date(project.createdAt),
		updatedAt: new Date(project.updatedAt),
		projectDate: new Date(project.projectDate),
	}));

	return (
		<>
			<h1>Projects</h1>
			<DataTable columns={columns} data={data} />
		</>
	);
}
