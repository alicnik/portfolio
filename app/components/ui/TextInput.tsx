import { kebabCase, lowerCase } from 'lodash';
import * as React from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	errorMessage?: string;
}

export function TextInput({
	label,
	type = 'text',
	errorMessage = `Please enter a valid ${lowerCase(label)}`,
	pattern,
	required,
	...props
}: TextInputProps) {
	const [isError, setIsError] = React.useState(false);

	return (
		<div className="flex flex-col gap-1 mb-1">
			<label htmlFor={kebabCase(label)} className="font-bold">
				{label}
			</label>
			<input
				type={type}
				id={kebabCase(label)}
				onError={() => setIsError(true)}
				pattern={pattern}
				required={required}
				onBlur={(e) => {
					if (required && !pattern) {
						setIsError(!e.target.value);
						return;
					}
					if (pattern) {
						const re = new RegExp(pattern);
						setIsError(!re.test(e.target.value));
					}
				}}
				className="rounded py-2 px-3 bg-transparent border border-gray-800 dark:border-gray-300"
				{...props}
			/>

			<p role={isError ? 'alert' : undefined} className="text-red-500 text-sm">
				{isError ? errorMessage : <>&nbsp;</>}
			</p>
		</div>
	);
}
