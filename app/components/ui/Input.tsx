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
		<div>
			<label htmlFor={label}>{label}</label>
			<input type={type} id={label} {...props} />
			{isError && <p>{errorMessage}</p>}
		</div>
	);
}
