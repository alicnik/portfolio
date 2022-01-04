import * as React from 'react';
import { useThemePreference } from '~/context';

export function useIsMounted() {
	const { isThemeResolved } = useThemePreference();
	const isMounted = React.useRef(false);

	React.useEffect(() => {
		// Wait for light/dark preference to be resolved before
		// asserting that component is mounted to avoid
		// unwanted animation flash (specifically in)
		if (!isThemeResolved) {
			return;
		}
		isMounted.current = true;
		return () => {
			isMounted.current = false;
		};
	}, [isThemeResolved]);

	return isMounted.current;
}
