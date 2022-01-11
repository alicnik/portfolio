import { DoubleQuotes } from '~/components/icons';
import { feedback } from '../data/feedback';

export default function Testimonials() {
	return (
		<div className="container mx-auto">
			<h1 className="text-3xl font-display mb-6">Testimonials</h1>
			<p className="mb-6">
				My time as a Teaching Assistant meant a lot to me, not least because I
				was helping to get people started in a world that I love. At the end of
				both courses on which I was a TA, the students were invited to provide
				feedback on the TAs. Below are some of the comments I received.
			</p>
			<div className="flex flex-col gap-6">
				{feedback.map((testimonial) => (
					<article className="p-4 relative shadow dark:shadow-lg border rounded border-gray-300 dark:border-gray-600">
						<DoubleQuotes className="absolute rotate-180 scale-[5] top-6 left-7 text-gray-300 dark:text-gray-600 text-opacity-30 z-[-1]" />
						<p className="dark:bg-gray-900 bg-opacity-10 rounded">
							{testimonial}
						</p>
						<DoubleQuotes className="absolute scale-[4] bottom-6 right-8 text-gray-300 dark:text-gray-600 text-opacity-30 z-[-1]" />
					</article>
				))}
			</div>
		</div>
	);
}
