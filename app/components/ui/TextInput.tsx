import * as React from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	isError: boolean;
	errorMessage: string;
}

export function TextInput({
	label,
	type = 'text',
	isError,
	errorMessage,
	...props
}: TextInputProps) {
	return (
		<div className="flex flex-col gap-1 mb-6">
			<label htmlFor={label} className="font-bold">
				{label}
			</label>
			<input
				type={type}
				id={label}
				className="rounded py-2 px-3 bg-transparent border border-gray-800 dark:border-gray-300"
				{...props}
			/>
			{isError && <p>{errorMessage}</p>}
		</div>
	);
}
