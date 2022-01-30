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
	const honeypot = formData.get('phone-number');

	invariant(typeof name === 'string');
	invariant(typeof email === 'string');
	invariant(typeof message === 'string');

	if (honeypot) {
		return {
			name,
			email,
			message,
			error: honeypot,
		};
	}

	try {
		await sendEmails({ name, email, message });
	} catch (error) {
		console.error(error);
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

	return (
		<section className="mx-auto md:grid md:grid-cols-2 gap-8 lg:gap-20">
			<div>
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
					{/* Honeypot for spam prevention. autoComplete="false" originally used
          but, amazingly enough, "nope" seemed to work where "false" didn't. This is why I code. */}
					<input
						type="tel"
						style={{ position: 'absolute', left: -9999, top: -9999 }}
						name="phone-number"
						id="phone-number"
						tabIndex={-1}
						autoComplete="nope"
					/>
					<Button
						variant="outlined"
						type="submit"
						className="my-10 w-28 h-12"
						defaultPadding={false}
					>
						{transition.submission ? (
							<LoadingIcon className="mx-auto" />
						) : (
							'Submit'
						)}
					</Button>
				</Form>
			</div>
			<div className="md:mt-20">
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
			</div>
		</section>
	);
}
