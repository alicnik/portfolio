import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';
import { db } from '~/lib/db.server';

export const loader = async ({ params }: LoaderFunctionArgs) => {
	const { id } = params;
	invariant(id, 'No id found');

	const testimonial = await db.testimonial.findUnique({
		where: { id },
	});

	return { testimonial };
};

export default function AdminTestimonialRoute() {
	const { testimonial } = useLoaderData<typeof loader>();
	return <pre>{JSON.stringify(testimonial, null, 2)}</pre>;
}
