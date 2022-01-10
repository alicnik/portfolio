import { Form } from 'remix';
import { Button, ExternalLink, Textarea, TextInput } from '~/components/ui';

export default function ContactRoute() {
	return (
		<div className="container">
			<h1 className="text-3xl font-display mb-8">Contact me</h1>
			<Form method="post">
				<TextInput
					label="Name"
					isError={false}
					errorMessage="There was an error"
				/>
				<TextInput
					label="Email"
					isError={false}
					errorMessage="There was an error"
				/>
				<Textarea
					label="Message"
					isError={false}
					errorMessage="There was an error"
				/>
				<Button variant="outlined" type="submit" className="my-10">
					Submit
				</Button>
				<p>
					Alternatively, you can email me directly at{' '}
					<ExternalLink to="mailto:me@alexnicholas.dev">
						me@alexnicholas.dev
					</ExternalLink>
					.
				</p>
			</Form>
		</div>
	);
}
