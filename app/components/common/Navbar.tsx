import * as React from 'react';
import { Link, useLocation } from 'remix';
import { ThemePicker } from './components';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
	const location = useLocation();
	const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

	React.useEffect(() => {
		setMobileMenuOpen(false);
	}, [location]);

	return (
		<header className="flex justify-between items-center px-1 pt-2 pb-7 h-16">
			<MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
			<nav className="hidden md:block">
				<ul className="flex">
					<li>
						<Link to="/">AN</Link>
					</li>
					<li>
						<Link to="/blog">Blog</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
			{mobileMenuOpen ? null : (
				<>
					<Link to="/" className="font-logo text-xl md:hidden">
						AN
					</Link>
					<ThemePicker />
				</>
			)}
		</header>
	);
}
