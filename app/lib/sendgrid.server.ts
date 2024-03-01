const baseConfig = {
	method: 'POST',
	headers: {
		Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
		'Content-Type': 'application/json',
	},
};

interface SendEmailsArgs {
	name: string;
	/** The email address of the person who submitted the form */
	email: string;
	message: string;
	/** The email address of the recipient of the alert, defaults to me! */
	alertRecipient?: string;
}

/**
 *
 * @param
 */
export async function sendEmails({
	name,
	email,
	message,
	alertRecipient = 'al.nicholas@gmail.com',
}: SendEmailsArgs) {
	try {
		await sendAlertEmail({ name, email, message, alertRecipient });
		await sendConfirmationEmail({ name, email });
	} catch (err) {
		console.error(err);
	}
}

/**
 * Send an alert email to myself to let me know that someone has been in touch
 * @param Object The name, email address, and message submitted via the form
 */
async function sendAlertEmail({
	name,
	email,
	message,
	alertRecipient,
}: SendEmailsArgs) {
	await fetch('https://api.sendgrid.com/v3/mail/send', {
		...baseConfig,
		body: JSON.stringify({
			from: {
				email: 'me@alexnicholas.dev',
				name: 'Alex Nicholas',
			},
			personalizations: [
				{
					to: [{ email: alertRecipient }],
					dynamic_template_data: { name, email, message },
				},
			],
			template_id: 'd-8776a89b59ee480e9d14a6d7449a140e',
		}),
	})
		.then((res) => console.log('alert response:', res))
		.catch((err) => console.error(err));
}

interface ConfirmationEmailArgs {
	name: string;
	email: string;
}

/**
 * Sends a confirmation email to the person who submitted the form.
 * @param Object The name and email address of the person who submitted the form
 */
async function sendConfirmationEmail({ name, email }: ConfirmationEmailArgs) {
	console.log('sending confirmation email to', email);
	await fetch('https://api.sendgrid.com/v3/mail/send', {
		...baseConfig,
		body: JSON.stringify({
			from: {
				email: 'me@alexnicholas.dev',
				name: 'Alex Nicholas',
			},
			personalizations: [
				{
					to: [{ email }],
					dynamic_template_data: { name },
				},
			],
			template_id: 'd-5d971a987fd04d4cb4f84fc62f78f11d',
		}),
	})
		.then((res) => console.log('confirmation response:', res))
		.catch((err) => console.error(err));
}
