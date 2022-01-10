import { Dialog } from '~/components/radix';
import { Link } from 'remix';
import {
	CloseIcon,
	HomeIcon,
	AboutIcon,
	ProjectsIcon,
	BlogIcon,
	ContactIcon,
	HamburgerMenuIcon,
} from '~/components/icons';

interface MobileMenuProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MobileMenu({ open, setOpen }: MobileMenuProps) {
	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger className="md:hidden scale-150" asChild>
				<HamburgerMenuIcon />
			</Dialog.Trigger>
			<Dialog.Overlay
				className={`
        bg-black bg-opacity-50
        fixed top-0 left-0 bottom-0 right-0
        animate-fade-out data-state-open:animate-fade-in 
        `}
			>
				<Dialog.Content
					className={`
          w-72 h-full p-8 
          bg-gray-50 text-gray-900 dark:text-gray-100 dark:bg-gray-800 
          animate-slide-out-left data-state-open:animate-slide-in-left
        `}
				>
					<Dialog.Title className="pb-8 leading-8 font-graphic text-xl">
						AN
					</Dialog.Title>
					<nav>
						<ul className="flex flex-col gap-6 text-xl">
							{['home', 'blog', 'projects', 'about', 'contact'].map((page) => (
								<li key={page}>
									<Link
										to={page === 'home' ? '/' : `/${page}`}
										className="capitalize flex items-center gap-4"
									>
										{menuIcons[page]}
										<span>{page}</span>
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</Dialog.Content>
				<Dialog.Close asChild>
					<CloseIcon className="absolute top-9 right-7 cursor-pointer data-state-open:animate-fade-in text-gray-50" />
				</Dialog.Close>
			</Dialog.Overlay>
		</Dialog.Root>
	);
}

const menuIcons: { [index: string]: React.ReactNode } = {
	home: <HomeIcon />,
	blog: <BlogIcon />,
	projects: <ProjectsIcon />,
	about: <AboutIcon />,
	contact: <ContactIcon />,
};
