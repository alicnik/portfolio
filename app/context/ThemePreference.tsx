import * as React from 'react';

export const THEME_PREFERENCE_KEY = 'theme-preference';
export const PREFERS_DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)';

export type ThemePreference = 'dark' | 'light' | 'system';

interface ThemePreferenceContextValue {
	themePreference: ThemePreference | undefined;
	updateThemePreference: (newPreference: ThemePreference) => void;
	isThemeResolved: boolean;
	hasPreferenceChanged: boolean;
	resetHasPreferenceChanged: () => void;
}

const ThemePreferenceContext =
	React.createContext<ThemePreferenceContextValue | null>(null);

export function ThemePreferenceProvider({
	children,
}: React.PropsWithChildren<{}>) {
	// All props to Kent C. Dodds for inspiration for much of this code
	// https://github.com/kentcdodds/kentcdodds.com/blob/main/app/utils/theme-provider.tsx

	const [isThemeResolved, setIsThemeResolved] = React.useState(false);
	const [themePreference, setThemePreference] = React.useState<
		ThemePreference | undefined
	>(() => {
		if (typeof window === 'undefined') {
			// Avoid className inconsistency upon hydration ("prop className did not match" error)
			return undefined;
		}
		if (document.documentElement.classList.contains('dark')) {
			return 'dark';
		}
		return getThemePreference();
	});
	const [hasPreferenceChanged, setHasPreferenceChanged] = React.useState(false);

	function watchSystemThemePreference(e: MediaQueryListEvent) {
		setThemePreference(e.matches ? 'dark' : 'light');
	}

	function getThemePreference() {
		// Check to see if user has already visited site and has a previous preference
		const userSetting = localStorage.getItem(THEME_PREFERENCE_KEY);
		if (isThemePreference(userSetting)) {
			setIsThemeResolved(true);
			return userSetting === 'dark' ? 'dark' : 'light';
		}

		// If no preference in local storage, check system preferences and apply dark mode if appropriate.
		const themeMediaQuery = window.matchMedia(PREFERS_DARK_MEDIA_QUERY);
		const isSystemDarkMode = themeMediaQuery.matches;
		if (isSystemDarkMode) {
			const preference = isSystemDarkMode ? 'dark' : 'light';
			localStorage.setItem(THEME_PREFERENCE_KEY, 'system');
			themeMediaQuery.addEventListener('change', watchSystemThemePreference);
			return preference;
		}
		setIsThemeResolved(true);
	}

	function updateThemePreference(newPreference: ThemePreference) {
		switch (newPreference) {
			case 'dark':
				localStorage.setItem(THEME_PREFERENCE_KEY, 'dark');
				setThemePreference('dark');
				setHasPreferenceChanged(true);
				return;
			case 'light':
				localStorage.setItem(THEME_PREFERENCE_KEY, 'light');
				setThemePreference('light');
				setHasPreferenceChanged(true);
				return;
			case 'system':
				const themeMediaQuery = window.matchMedia(PREFERS_DARK_MEDIA_QUERY);
				const isSystemDarkMode = themeMediaQuery.matches;
				const preference = isSystemDarkMode ? 'dark' : 'light';
				localStorage.setItem(THEME_PREFERENCE_KEY, 'system');
				themeMediaQuery.addEventListener('change', watchSystemThemePreference);
				setThemePreference(preference);
				setHasPreferenceChanged(true);
				return;
		}
	}

	function resetHasPreferenceChanged() {
		setHasPreferenceChanged(false);
	}

	return (
		<ThemePreferenceContext.Provider
			value={{
				themePreference,
				updateThemePreference,
				isThemeResolved,
				hasPreferenceChanged,
				resetHasPreferenceChanged,
			}}
		>
			{children}
		</ThemePreferenceContext.Provider>
	);
}

export function useThemePreference() {
	const context = React.useContext(ThemePreferenceContext);
	if (!context) {
		throw new Error(
			'useThemePreference can only be called from within a ThemePreferenceProvider.',
		);
	}
	return context;
}

export function isThemePreference(
	preference: string | null,
): preference is ThemePreference {
	if (!preference) return false;
	return ['dark', 'light', 'system'].includes(preference);
}

const clientThemeCode = `
  const userSetting = localStorage.getItem(${JSON.stringify(
		THEME_PREFERENCE_KEY,
	)})

  if (userSetting !== 'light') {
    if (userSetting === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      const isSystemDarkMode = window.matchMedia(${JSON.stringify(
				PREFERS_DARK_MEDIA_QUERY,
			)}).matches
      if (isSystemDarkMode) {
        document.documentElement.classList.add('dark')
      }
    }
  }
`;

export function AvoidFlashOfWrongTheme() {
	const { themePreference } = useThemePreference();

	return <script dangerouslySetInnerHTML={{ __html: clientThemeCode }} />;
}
