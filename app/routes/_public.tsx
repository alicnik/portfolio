import { Outlet } from '@remix-run/react';
import { Navbar } from '~/components/common';

export default function PublicLayout() {
	return (
		<>
			<Navbar />
			<main className="px-6 pt-32 max-w-6xl pb-8 container mx-auto">
				<Outlet />
			</main>
		</>
	);
}
