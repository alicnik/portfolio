import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { DataTable } from '~/components/admin';
import { db } from '~/lib/db.server';
import { columns } from './columns';

export const loader = async () => {
	const testimonials = await db.testimonial.findMany();

	return json({ testimonials });
};

export default function AdminTestimonialsIndexRoute() {
	const { testimonials } = useLoaderData<typeof loader>();

	const data = testimonials.map((testimonial) => ({
		...testimonial,
		createdAt: new Date(testimonial.createdAt),
		updatedAt: new Date(testimonial.updatedAt),
	}));

	return (
		<>
			<h1>Testimonials</h1>
			<DataTable columns={columns} data={data} />
		</>
	);
}
