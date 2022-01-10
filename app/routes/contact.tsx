import { Form } from 'remix';

export default function ContactRoute() {
	return (
		<div className="container">
			<h1 className="text-3xl font-display mb-6">Contact me</h1>
			<Form method="post"></Form>
		</div>
	);
}
