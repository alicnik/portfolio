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

	const CSP =
		baseCSP + process.env.NODE_ENV === 'production' ? prodCSP : devCSP;

	responseHeaders.set('Content-Type', 'text/html');
	responseHeaders.set('Content-Security-Policy', CSP);

	return new Response('<!DOCTYPE html>' + markup, {
		status: responseStatusCode,
		headers: responseHeaders,
	});
}

const baseCSP = `default-src 'none'; img-src 'self'; style-src 'self' http://fonts.googleapis.com; font-src https://fonts.gstatic.com;base-uri 'self'; form-action 'self';`;
const devCSP = `script-src 'unsafe-inline' 'self';`;
const prodCSP = `script-src 'self' 'nonce-${nonce}'; connect-src 'self';`;
