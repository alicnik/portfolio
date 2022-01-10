import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'filled' | 'outlined';
}

export function Button({
	className = '',
	variant = 'filled',
	children,
	...props
}: ButtonProps) {
	return (
		<button
			className={clsx(
				'block font-sans rounded-sm font-bold',
				variant === 'filled' &&
					'py-1 px-3 bg-gray-800 dark:bg-gray-200 text-gray-50 dark:text-gray-800',
				variant === 'outlined' &&
					'py-3 px-6 border border-gray-800 dark:border-gray-300 text-gray-800 dark:text-gray-50',
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
}
