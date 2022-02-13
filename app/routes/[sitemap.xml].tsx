import fs from 'fs';
import type { LoaderFunction } from 'remix';
import { projects } from '~/data/projects';

const date = '2022-02-07T00:15:16+01:00';

export const loader: LoaderFunction = () => {
	// handle "GET" request
	// separating xml content from Response to keep clean code.
	// const routes = fs.readdirSync('app/routes');
	// console.log(routes);
	const content = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://alexnicholas.dev/</loc>
        <lastmod>${date}</lastmod>
        <priority>1.0</priority>
      </url>
      ${['about', 'projects', 'testimonials', 'contact'].map((page) => {
				return `<url>
        <loc>https://alexnicholas.dev/${page}/</loc>
        <lastmod>${date}</lastmod>
        <priority>1.0</priority>
      </url>`;
			})}
      ${projects.map((project) => {
				return `<url>
        <loc>https://alexnicholas.dev/projects/${project.slug}/</loc>
        <lastmod>${date}</lastmod>
        <priority>1.0</priority>
      </url>`;
			})}
    </urlset>
    `;

	// Return the response with the content, a status 200 message, and the appropriate headers for an XML page
	return new Response(content, {
		status: 200,
		headers: {
			'Content-Type': 'application/xml',
			'xml-version': '1.0',
			encoding: 'UTF-8',
		},
	});
};
