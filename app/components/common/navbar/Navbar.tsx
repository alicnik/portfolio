import * as React from 'react';
import { Link, useLocation } from 'remix';
import { ThemePicker, MobileMenu } from './components';

export function Navbar() {
	const location = useLocation();
	const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

	React.useEffect(() => {
		setMobileMenuOpen(false);
	}, [location]);

	return (
		<header className="fixed top-0 pt-9 z-10 pb-20 px-7 w-full bg-gradient-to-b from-gray-50 via-gray-50 dark:from-gray-800 dark:via-gray-800">
			<div className="container mx-auto flex justify-between items-center min-h-8">
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
						{location.pathname !== '/' && (
							<Link
								to="/"
								className="font-graphic text-2xl md:hidden leading-[normal] translate-y-[0.5px]"
							>
								AN
							</Link>
						)}
						<ThemePicker />
					</>
				)}
			</div>
		</header>
	);
}
