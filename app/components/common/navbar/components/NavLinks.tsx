import { Link } from '@remix-run/react';
import * as React from 'react';
import {
	AboutIcon,
	BlogIcon,
	ContactIcon,
	HomeIcon,
	ProjectsIcon,
	TestimonialsIcon,
} from '~/components/icons';

interface NavLinksProps {
	isMobile?: boolean;
}

export function NavLinks({ isMobile = false }) {
	let pages = ['about', 'projects', 'testimonials', 'contact'];
	if (isMobile) pages = ['home'].concat(pages);

	return (
		<>
			{pages.map((page, index) => (
				<li key={page}>
					<Link
						to={page === 'home' ? '/' : `/${page}`}
						data-index={index}
						className="capitalize flex items-center gap-4"
					>
						<span className="md:hidden">{menuIcons[page]}</span>
						<span className="lg:text-lg">{page}</span>
					</Link>
				</li>
			))}
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
