import { Link, useLocation } from '@remix-run/react';
import * as React from 'react';
import { ThemePicker, MobileMenu, NavLinks } from './components';

export function Navbar() {
	const location = useLocation();
	const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

	React.useEffect(() => {
		setMobileMenuOpen(false);
	}, [location]);

	return (
		<div className="fixed top-0 z-10 w-full">
			<header className="pt-6 px-7 w-full bg-gray-50 dark:bg-gray-800">
				<div className="mx-auto max-w-6xl flex justify-between items-center">
					<MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
					<nav className="hidden md:block">
						<ul className="flex gap-8">
							<li>
								<Link
									to="/"
									className="font-graphic text-xl lg:text-2xl md:mr-4 lg:mr-8"
								>
									AN
								</Link>
							</li>
							<NavLinks />
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
			<div className="h-7 w-full bg-gradient-to-b from-gray-50 via-gray-50 dark:from-gray-800 dark:via-gray-800" />
		</div>
	);
}
