import { Outlet } from '@remix-run/react';
import { Sidebar, Topbar } from '~/components/admin';

export default function AdminLayout() {
	return (
		<main className="p-4 flex h-full">
			<Sidebar />
			<div className="pl-4 w-full">
				<Topbar />
				<section className="pt-4">
					<Outlet />
				</section>
			</div>
		</main>
	);
}
