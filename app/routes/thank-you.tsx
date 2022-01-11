import { Link, MetaFunction } from 'remix';
import { Button } from '~/components/ui';

export const meta: MetaFunction = () => ({
	robots: 'noindex',
	title: 'AN | Thank you!',
});

export default function ThankYou() {
	return (
		<div className="container mx-auto">
			<p className="mb-6">
				Thank you for your message. You should receive a confirmation email
				shortly.
			</p>
			<Link to="/">
				<Button variant="outlined" className="mx-auto">
					Back to the homepage
				</Button>
			</Link>
		</div>
	);
}
