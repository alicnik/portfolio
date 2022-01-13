import * as React from 'react';
import { Link } from 'remix';
import {
	HomeIcon,
	AboutIcon,
	ProjectsIcon,
	BlogIcon,
	ContactIcon,
	TestimonialsIcon,
} from '~/components/icons';

export function NavLinks() {
	// const navLinkRefs = React.useRef<HTMLElement[]>([]);

	// const navigateWithArrowKeys = (e: KeyboardEvent) => {
	// 	const activeElement = document.activeElement as HTMLElement;
	// 	const activeIndex = activeElement.dataset['index'];
	// 	const lastIndex = navLinkRefs.current.length - 1;

	// 	if (e.key === 'ArrowDown') {
	// 		const nextIndex =
	// 			activeIndex && Number(activeIndex) !== lastIndex
	// 				? Number(activeIndex) + 1
	// 				: 0;
	// 		navLinkRefs.current[nextIndex].focus();
	// 		return;
	// 	}
	// 	if (e.key === 'ArrowUp') {
	// 		const previousIndex =
	// 			activeIndex && Number(activeIndex) !== 0
	// 				? Number(activeIndex) - 1
	// 				: lastIndex;
	// 		navLinkRefs.current[previousIndex].focus();
	// 		return;
	// 	}
	// };

	// React.useEffect(() => {
	// 	document.addEventListener('keydown', navigateWithArrowKeys);
	// 	return () => document.removeEventListener('keydown', navigateWithArrowKeys);
	// }, []);

	return (
		<>
			{['home', 'projects', 'about', 'testimonials', 'contact'].map(
				(page, index) => (
					<li key={page}>
						<Link
							to={page === 'home' ? '/' : `/${page}`}
							// ref={(el) => el && (navLinkRefs.current[index] = el)}
							data-index={index}
							className="capitalize flex items-center gap-4"
						>
							<span className="md:hidden">{menuIcons[page]}</span>
							<span className="lg:text-lg">{page}</span>
						</Link>
					</li>
				),
			)}
		</>
	);
}

const menuIcons: { [index: string]: React.ReactNode } = {
	home: <HomeIcon />,
	blog: <BlogIcon />,
	projects: <ProjectsIcon />,
	about: <AboutIcon />,
	testimonials: <TestimonialsIcon />,
	contact: <ContactIcon />,
};
