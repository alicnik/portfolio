import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { Button } from '~/components/ui';

export const meta: MetaFunction = () => [
	{ title: 'AN | Thank you!' },
	{ name: 'robots', content: 'noindex' },
];

export default function ThankYouRoute() {
	return (
		<div className="container mx-auto">
			<p className="mb-6 text-center md:text-left">
				Thank you for your message. You should receive a confirmation email
				shortly.
			</p>
			<Link to="/">
				<Button variant="outlined" className="mx-auto md:mx-0">
					Back to the homepage
				</Button>
			</Link>
		</div>
	);
}
