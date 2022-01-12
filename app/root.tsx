import * as React from 'react';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'remix';
import type { MetaFunction, LinksFunction } from 'remix';
import customStyles from './styles/custom.css';
import tailwindStyles from './styles/tailwind.css';
import {
	AvoidFlashOfWrongTheme,
	ThemePreferenceProvider,
	useThemePreference,
} from '~/context';
import { Navbar } from '~/components/common';

export const links: LinksFunction = () => {
	return [
		{ rel: 'stylesheet', href: customStyles },
		{ rel: 'stylesheet', href: tailwindStyles },
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=IM+Fell+English&family=Merriweather&family=Raleway:ital,wght@0,400;1,300&display=swap',
		},
		{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com',
			crossOrigin: 'anonymous',
		},
	];
};

export const meta: MetaFunction = () => {
	return { title: 'Alex Nicholas | Front-End Developer' };
};

function App() {
	const { themePreference } = useThemePreference();

	return (
		<html lang="en" className={themePreference === 'dark' ? 'dark' : ''}>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<AvoidFlashOfWrongTheme />
				<Links />
			</head>
			<body className="font-sans leading-relaxed bg-gray-50 text-gray-900 dark:text-gray-100 dark:bg-gray-800">
				<Navbar />
				<main className="px-6 pt-32 max-w-6xl pb-8 container mx-auto">
					<Outlet />
				</main>
				<ScrollRestoration />

				<Scripts />
				{process.env.NODE_ENV === 'development' && <LiveReload />}
			</body>
		</html>
	);
}

export default function AppWithProviders() {
	return (
		<ThemePreferenceProvider>
			<App />
		</ThemePreferenceProvider>
	);
}
