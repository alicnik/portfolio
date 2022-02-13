import clsx from 'clsx';
import * as React from 'react';

export interface ExternalLinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	to: string;
	underlined?: boolean;
	className?: string;
}

export function ExternalLink({
	to,
	children,
	className,
	underlined = true,
	...props
}: React.PropsWithChildren<ExternalLinkProps>) {
	return (
		<a
			className={clsx(
				'cursor-pointer',
				underlined && 'underline underline-offset-2',
				className,
			)}
			href={to}
			target="_blank"
			rel="noopener noreferrer"
			{...props}
		>
			{children}
		</a>
	);
}
