import * as React from 'react';
import { Link } from 'remix';
import { ThemePicker } from './components';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
	return (
		<header className="flex justify-between items-center px-1 pt-2 pb-7">
			<MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
			<nav>
				<ul className="hidden md:flex">
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
			{mobileMenuOpen ? null : <ThemePicker />}
		</header>
	);
}
