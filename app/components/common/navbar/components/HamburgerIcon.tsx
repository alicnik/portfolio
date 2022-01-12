import * as React from 'react';
import clsx from 'clsx';
import { useIsMounted } from '~/hooks';
import { useThemePreference } from '~/context';

// TODO Consider removing as now using icons instead of animations as better interaction with Radix-UI

const baseSpanClasses =
	'h-1 w-9 rounded-sm transition-transform bg-gray-900 dark:bg-gray-50 dark:shadow-[0_0_1px_0.3px_rgba(255,255,255,0.8)]';

interface HamburgerIconProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function HamburgerIcon({ open, setOpen }: HamburgerIconProps) {
	const { hasPreferenceChanged, resetHasPreferenceChanged } =
		useThemePreference();
	const isMounted = useIsMounted();
	const shouldHideAnimation = !isMounted || hasPreferenceChanged;

	const handleClick = () => {
		if (hasPreferenceChanged) {
			resetHasPreferenceChanged();
		}
		setOpen(!open);
	};

	// TODO: Click outside sets open to false (avoids middle line disappearing trick (hopefully))

	return (
		<div
			className="flex flex-col justify-center items-center gap-2 rounded-full cursor-pointer md:hidden scale-75 z-10 transition-transform duration-200"
			onClick={handleClick}
		>
			<span
				className={clsx(
					baseSpanClasses,
					shouldHideAnimation
						? null
						: open
						? 'motion-safe:animate-hamburger-top-open'
						: 'motion-safe:animate-hamburger-top-close',
				)}
			/>
			<span className={clsx(baseSpanClasses, 'delay-150', open && 'scale-0')} />
			<span
				className={clsx(
					baseSpanClasses,
					shouldHideAnimation
						? null
						: open
						? 'motion-safe:animate-hamburger-bottom-open'
						: 'motion-safe:animate-hamburger-bottom-close',
				)}
			/>
		</div>
	);
}
