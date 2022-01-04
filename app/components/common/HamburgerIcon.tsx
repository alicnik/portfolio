import * as React from 'react';
import clsx from 'clsx';
import { useIsMounted } from '~/hooks';
import { useThemePreference } from '~/context';

const baseSpanClasses =
	'h-1 w-9 rounded-sm transition-transform bg-gray-900 dark:bg-gray-50 dark:shadow-[0_0_1px_0.3px_rgba(255,255,255,0.8)]';

export function HamburgerIcon() {
	const [open, setOpen] = React.useState(false);

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

	return (
		<div
			className="h-16 w-16 flex flex-col justify-center items-center gap-2 rounded-full cursor-pointer md:hidden"
			onClick={handleClick}
		>
			<span
				className={clsx(
					baseSpanClasses,
					open ? 'animate-hamburgerTopOpen' : 'animate-hamburgerTopClose',
					shouldHideAnimation && 'animate-none',
				)}
			/>
			<span className={clsx(baseSpanClasses, 'delay-150', open && 'scale-0')} />
			<span
				className={clsx(
					baseSpanClasses,
					open ? 'animate-hamburgerBottomOpen' : 'animate-hamburgerBottomClose',
					shouldHideAnimation && 'animate-none',
				)}
			/>
		</div>
	);
}
