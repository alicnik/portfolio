import { LoaderFunctionArgs } from '@remix-run/node';

import { authenticator } from '~/services/auth.server';

export const loader = async ({ request }: LoaderFunctionArgs) => {
	return await authenticator.isAuthenticated(request, {
		failureRedirect: '/login',
	});
};

export default function AdminPage() {
	return <h1>Admin</h1>;
}
