import { kebabCase, lowerCase } from 'lodash';
import * as React from 'react';

interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
	errorMessage?: string;
}

export function Textarea({
	label,
	errorMessage = `Please enter a valid ${lowerCase(label)}`,
	...props
}: TextareaProps) {
	const [isError, setIsError] = React.useState(false);
	return (
		<div className="flex flex-col gap-2 mb-6">
			<label htmlFor={kebabCase(label)}>{label}</label>
			<textarea
				id={kebabCase(label)}
				onError={() => setIsError(true)}
				className="rounded py-2 px-3 bg-transparent border border-gray-700 dark:border-gray-300"
				{...props}
			/>
			{isError && <p>{errorMessage}</p>}
		</div>
	);
}
