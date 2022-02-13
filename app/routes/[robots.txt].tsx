import { LoaderFunction } from 'remix';

export const loader: LoaderFunction = () => {
	const robots = `User-agent: Googlebot
  
User-agent: *
Allow: /

Sitemap: https://alexnicholas.dev/sitemap.xml`;

	return new Response(robots, {
		status: 200,
		headers: { 'Content-Type': 'text/plain' },
	});
};
