import { Link } from '@remix-run/react';

export function Topbar() {
	return (
		<aside className="w-full pb-2 border-b-[1px] border-b-gray-700">
			<nav className="flex justify-end">
				<Link to="/">Visit site</Link>
			</nav>
		</aside>
	);
}
