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
import styles from './tailwind.css';
import {
	AvoidFlashOfWrongTheme,
	ThemePreferenceProvider,
	useThemePreference,
} from '~/context';
import { Navbar } from '~/components/common';

export const links: LinksFunction = () => {
	return [
		{ rel: 'stylesheet', href: styles },
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=IM+Fell+Great+Primer&family=Playfair+Display:ital,wght@0,700;1,700&family=Source+Sans+Pro:ital,wght@0,300;0,400;1,300;1,400&display=swap',
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
				<Outlet />
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
