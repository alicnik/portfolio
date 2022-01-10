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
		<div className="flex flex-col gap-2 mb-6">
			<label htmlFor={label}>{label}</label>
			<textarea
				id={label}
				className="rounded py-2 px-3 bg-transparent border border-gray-700 dark:border-gray-300"
				{...props}
			/>
			{isError && <p>{errorMessage}</p>}
		</div>
	);
}
