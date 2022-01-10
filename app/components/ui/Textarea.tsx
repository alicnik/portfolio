import * as React from 'react';

interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
	isError: boolean;
	errorMessage: string;
}

export function Textarea({
	label,
	isError,
	errorMessage,
	...props
}: TextareaProps) {
	return (
		<div>
			<label htmlFor={label}>{label}</label>
			<textarea id={label} {...props} />
			{isError && <p>{errorMessage}</p>}
		</div>
	);
}
