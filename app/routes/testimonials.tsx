import { useLoaderData } from 'remix';
import { DoubleQuotes } from '~/components/icons';
import { testimonials as testimonialsData } from '~/data/testimonials';

import type { LoaderFunction, MetaFunction } from 'remix';
import type { Testimonial } from '~/types';

type AllTestimonials = Testimonial[];

export const loader: LoaderFunction = (): Testimonial[] => {
	const testimonials = testimonialsData.sort(
		(a, b) => b.value.length - a.value.length,
	);
	return testimonials;
};

export const meta: MetaFunction = () => {
	return {
		title: 'AN | Testimonials',
		description:
			'Some of the nice things people have said about me from my time as a Teaching Assistant. No bribes were involved.',
		'og:title': 'Alex Nicholas | Testimonials',
		'og:type': 'website',
		'og:url': 'https://alexnicholas.dev/testimonials/',
		'og:image': 'https://alexnicholas.dev/images/portfolio-sm.webp',
		'twitter:card': 'summary',
	};
};

export default function TestimonialsRoute() {
	const testimonials = useLoaderData<AllTestimonials>();

	return (
		<div className="container mx-auto">
			<h1 className="text-3xl font-display mb-6">Testimonials</h1>
			<p className="mb-6">
				My time as a Teaching Assistant meant a lot to me, not least because I
				was helping to get people started in a world that I love. At the end of
				both courses on which I was a TA, the students were invited to provide
				feedback on the TAs. Below are some of the comments I received.
			</p>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{testimonials.map((testimonial, i) => (
					<article
						key={i}
						className="p-4 relative shadow dark:shadow-lg border rounded border-gray-300 dark:border-gray-600 flex justify-center items-center"
					>
						<DoubleQuotes className="absolute rotate-180 scale-[5] top-6 left-7 text-gray-300 dark:text-gray-600 text-opacity-30 dark:text-opacity-20 z-[-1]" />
						<p>{testimonial.value}</p>
						<DoubleQuotes className="absolute scale-[4] bottom-6 right-8 text-gray-300 dark:text-gray-600 text-opacity-30 dark:text-opacity-20 z-[-1]" />
					</article>
				))}
			</div>
		</div>
	);
}
