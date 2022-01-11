const baseConfig = {
	method: 'POST',
	headers: {
		Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
		'Content-Type': 'application/json',
	},
};

export async function sendEmails({ name, email, message }: AlertEmailArgs) {
	await sendAlertEmail({ name, email, message });
	await sendConfirmationEmail({ name, email });
}

interface AlertEmailArgs {
	name: string;
	email: string;
	message: string;
}

async function sendAlertEmail({ name, email, message }: AlertEmailArgs) {
	await fetch('https://api.sendgrid.com/v3/mail/send', {
		...baseConfig,
		body: JSON.stringify({
			from: {
				email: 'me@alexnicholas.dev',
				name: 'Alex Nicholas',
			},
			personalizations: [
				{
					to: [{ email: 'al.nicholas@gmail.com' }],
					dynamic_template_data: { name, email, message },
				},
			],
			template_id: 'd-8776a89b59ee480e9d14a6d7449a140e',
		}),
	});
}

interface ConfirmationEmailArgs {
	name: string;
	email: string;
}

async function sendConfirmationEmail({ name, email }: ConfirmationEmailArgs) {
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
	});
}
