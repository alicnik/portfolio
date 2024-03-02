import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { authenticator } from '~/services/auth.server';

export const meta: MetaFunction = () => [
	{ title: 'AN | Login' },
	{ name: 'robots', content: 'noindex' },
];

export async function loader({ request }: LoaderFunctionArgs) {
	return await authenticator.isAuthenticated(request, {
		successRedirect: '/admin',
	});
}

export default function AdminLoginRoute() {
	return (
		<Form action="/auth/github" method="post">
			<button>Login with GitHub</button>
		</Form>
	);
}
