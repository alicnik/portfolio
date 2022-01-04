import { Link } from 'remix';
import { HamburgerIcon } from '.';
import { ThemePicker } from './components';
export function Navbar() {
	return (
		<header className="flex justify-between">
			<HamburgerIcon />
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
			<ThemePicker />
		</header>
	);
}
