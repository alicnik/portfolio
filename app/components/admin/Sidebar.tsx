import { Link } from '@remix-run/react';

export function Sidebar() {
	return (
		<aside className="min-w-32 border-r-[1px] border-r-gray-700 h-full">
			<nav className="flex flex-col gap-4">
				<Link to="/admin" className="mb-4 font-bold">
					Admin
				</Link>
				<Link to="/admin/projects">Projects</Link>
				<Link to="/admin/testimonials">Testimonials</Link>
			</nav>
		</aside>
	);
}
