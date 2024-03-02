import { Outlet } from '@remix-run/react';
import { Sidebar } from '~/components/admin';

export default function AdminLayout() {
	return (
		<main className="p-4 flex h-full">
			<Sidebar />
			<section className="pl-4">
				<Outlet />
			</section>
		</main>
	);
}
