import * as React from 'react';
import { useThemePreference } from '~/context';

// TODO Remove if HamburgerIcon goes completely unused?

/**
 * Hook to determine whether a component is mounted. Useful for
 * avoiding flashes of animations, etc.
 * @returns Current mounted state of the component
 */
export function useIsMounted() {
	const { themePreference } = useThemePreference();
	const isMounted = React.useRef(false);

	React.useEffect(() => {
		// Wait for light/dark preference to be resolved before
		// asserting that component is mounted to avoid
		// unwanted animation flash
		if (!themePreference) {
			return;
		}
		isMounted.current = true;
		return () => {
			isMounted.current = false;
		};
	}, [themePreference]);

	return () => isMounted.current;
}
