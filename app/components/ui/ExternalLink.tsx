import clsx from 'clsx';
import * as React from 'react';

export interface ExternalLinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	to: string;
	className?: string;
}

export function ExternalLink({
	to,
	children,
	className = 'underline underline-offset-2',
	...props
}: React.PropsWithChildren<ExternalLinkProps>) {
	return (
		<a
			className={clsx('cursor-pointer underline underline-offset-2', className)}
			href={to}
			target="_blank"
			{...props}
		>
			{children}
		</a>
	);
}
