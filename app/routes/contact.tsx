import {
	ActionFunction,
	Form,
	redirect,
	useActionData,
	useTransition,
} from 'remix';
import { Button, ExternalLink, Textarea, TextInput } from '~/components/ui';
import invariant from 'tiny-invariant';
import { LoadingIcon } from '~/components/icons';
import { sendEmails } from '~/lib/sendgrid.server';

interface ActionDataValue {
	error: string;
	name: string;
	email: string;
	message: string;
}

export const action: ActionFunction = async ({ request }) => {
	const formData = await request.formData();
	const name = formData.get('name');
	const email = formData.get('email');
	const message = formData.get('message');

	invariant(typeof name === 'string');
	invariant(typeof email === 'string');
	invariant(typeof message === 'string');

	try {
		sendEmails({ name, email, message });
	} catch (error) {
		return {
			error,
			name,
			email,
			message,
		};
	}

	return redirect('/thank-you');
};

export default function ContactRoute() {
	const actionData = useActionData<ActionDataValue>();
	const transition = useTransition();

	console.log(actionData);

	return (
		<div className="container">
			<h1 className="text-3xl font-display mb-8">Contact me</h1>
			<Form method="post">
				<TextInput
					label="Name"
					name="name"
					autoComplete="name"
					defaultValue={actionData?.name}
					required
				/>
				<TextInput
					label="Email"
					name="email"
					autoComplete="email"
					defaultValue={actionData?.email}
					pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
					required
				/>
				<Textarea
					label="Message"
					name="message"
					defaultValue={actionData?.message}
					required
				/>
				<Button variant="outlined" type="submit" className="my-10 w-28 h-12">
					{transition.submission ? (
						<LoadingIcon className="mx-auto" />
					) : (
						'Submit'
					)}
				</Button>
				{actionData?.error ? (
					<p className="text-fuchsia-400">
						Sorry, there was an error, please try again or email me directly at{' '}
						<ExternalLink to="mailto:me@alexnicholas.dev">
							me@alexnicholas.dev
						</ExternalLink>
						.
					</p>
				) : (
					<p>
						Alternatively, you can email me directly at{' '}
						<ExternalLink to="mailto:me@alexnicholas.dev">
							me@alexnicholas.dev
						</ExternalLink>
						.
					</p>
				)}
			</Form>
		</div>
	);
}
