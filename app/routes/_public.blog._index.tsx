import { MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => [
	{ title: 'AN | Blog' },
	{ name: 'robots', content: 'noindex' },
];

export default function BlogRoute() {
	return <h1>Coming soon...</h1>;
}
