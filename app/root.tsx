import * as React from 'react';
import {
	Link,
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useCatch,
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
import { Button } from './components/ui';
import { nonce } from './entry.server';

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
	return {
		title: 'Alex Nicholas | Front-End Developer',
		'og:site_name': 'Alex Nicholas Portfolio',
		'og:type': 'website',
		'twitter:card': 'summary',
	};
};

function Document({ children }: { children: React.ReactNode }) {
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
					{children}
				</main>

				<ScrollRestoration />
				{process.env.NODE_ENV === 'production' ? (
					<Scripts nonce={nonce} />
				) : (
					<Scripts />
				)}
				{process.env.NODE_ENV === 'development' && <LiveReload />}
			</body>
		</html>
	);
}

export default function App() {
	return (
		<ThemePreferenceProvider>
			<Document>
				<Outlet />
			</Document>
		</ThemePreferenceProvider>
	);
}

export function CatchBoundary() {
	const caught = useCatch();

	return (
		<ThemePreferenceProvider>
			<Document>
				<div>
					<h1 className="text-2xl">This is not the page you're looking for</h1>
					<Link to="/">
						<Button variant="outlined" className="my-6">
							Move along
						</Button>
					</Link>
				</div>
			</Document>
		</ThemePreferenceProvider>
	);
}

export function ErrorBoundary() {
	return (
		<ThemePreferenceProvider>
			<Document>
				<div>
					<h1 className="text-2xl mb-6">Something went wrong.</h1>
					<p className="text-lg">
						If this issue persists, please let me know via the{' '}
						<Link to="/contact">contact page</Link>.
					</p>
					<Link to="/">
						<Button variant="outlined" className="my-6">
							Back to safety
						</Button>
					</Link>
				</div>
			</Document>
		</ThemePreferenceProvider>
	);
}
