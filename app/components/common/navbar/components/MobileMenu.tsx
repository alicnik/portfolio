import * as React from 'react';
import { Dialog } from '~/components/radix';
import { CloseIcon, HamburgerMenuIcon } from '~/components/icons';
import { NavLinks } from './NavLinks';

interface MobileMenuProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MobileMenu({ open, setOpen }: MobileMenuProps) {
	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<HamburgerMenuIcon className="md:hidden scale-[1.75] cursor-pointer appearance-none" />
			</Dialog.Trigger>
			<Dialog.Overlay
				className={`
        bg-black bg-opacity-50
        fixed top-0 left-0 bottom-0 right-0
        animate-fade-out data-[state=open]:animate-fade-in 
        `}
			>
				<Dialog.Content
					className={`
          w-72 h-full p-8 
          bg-gray-50 text-gray-900 dark:text-gray-100 dark:bg-gray-800 
          animate-slide-out-left data-[state=open]:animate-slide-in-left
        `}
				>
					<Dialog.Title className="pb-8 leading-8 font-graphic text-xl">
						AN
					</Dialog.Title>
					<nav>
						<ul className="flex flex-col gap-6 text-xl">
							<NavLinks isMobile />
						</ul>
					</nav>
				</Dialog.Content>
				<Dialog.Close asChild>
					<CloseIcon className="appearance-none absolute top-9 right-7 cursor-pointer data-[state=open]:animate-fade-in text-gray-50 scale-125" />
				</Dialog.Close>
			</Dialog.Overlay>
		</Dialog.Root>
	);
}
