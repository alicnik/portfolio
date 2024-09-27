import * as React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/remix';
import { Analytics } from '@vercel/analytics/react';
import customStyles from './styles/custom.css';
import tailwindStyles from './styles/main.css';
import fontStyles from './styles/fonts.css';
import {
	AvoidFlashOfWrongTheme,
	ThemePreferenceProvider,
	useThemePreference,
} from '~/context';
import { Navbar } from '~/components/common';
import { Button } from './components/ui';
import { nonce } from './entry.server';
import {
	Meta,
	Links,
	Scripts,
	LiveReload,
	Outlet,
	Link,
} from '@remix-run/react';
import type { LinksFunction, MetaFunction } from '@remix-run/node';

export const links: LinksFunction = () => {
	return [
		{ rel: 'stylesheet', href: customStyles },
		{ rel: 'stylesheet', href: tailwindStyles },
		{ rel: 'stylesheet', href: fontStyles },
		{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com',
			crossOrigin: 'anonymous',
		},
	];
};

export const meta: MetaFunction = () => [
	{ title: 'Alex Nicholas | Front-End Developer' },
	{ property: 'og:site_name', content: 'Alex Nicholas Portfolio' },
	{ property: 'og:type', content: 'website' },
	{ property: 'twitter:card', content: 'summary' },
];

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

				{/* // Disable ScrollRestoration to avoid CSP clash 
        // TODO: Find a way to pass nonce to ScrollResoration script tag
				<ScrollRestoration /> */}

				<Scripts nonce={nonce} />
				<SpeedInsights />
				<Analytics />
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
	return (
		<ThemePreferenceProvider>
			<Document>
				<div>
					<h1 className="text-2xl">
						This is not the page you&apos;re looking for
					</h1>
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
