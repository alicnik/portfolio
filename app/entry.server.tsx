import { renderToString } from 'react-dom/server';
import { RemixServer } from 'remix';
import type { EntryContext } from 'remix';
import { customAlphabet } from 'nanoid';
import { alphanumeric } from 'nanoid-dictionary';

const nanoid = customAlphabet(alphanumeric, 24);
export const nonce = nanoid();

export default function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext,
) {
	const markup = renderToString(
		<RemixServer context={remixContext} url={request.url} />,
	);

	responseHeaders.set('Content-Type', 'text/html');
	responseHeaders.set(
		'Content-Security-Policy',
		`default-src 'none'; script-src 'self' 'nonce-${nonce}'; img-src 'self'; style-src 'self' 'unsafe-inline' http://fonts.googleapis.com; font-src https://fonts.gstatic.com;base-uri 'self'; form-action 'self'; connect-src 'self' ws://localhost:8002;`,
	);

	return new Response('<!DOCTYPE html>' + markup, {
		status: responseStatusCode,
		headers: responseHeaders,
	});
}
