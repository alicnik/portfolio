import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'filled' | 'outlined';
	defaultPadding?: boolean;
}

export function Button({
	className = '',
	variant = 'filled',
	defaultPadding = true,
	children,
	...props
}: ButtonProps) {
	return (
		<button
			className={clsx(
				'block font-sans rounded-sm font-bold',
				variant === 'filled' &&
					'bg-gray-800 dark:bg-gray-200 text-gray-50 dark:text-gray-800',
				variant === 'filled' && defaultPadding && 'py-1 px-3',
				variant === 'outlined' &&
					'border border-gray-800 dark:border-gray-300 text-gray-800 dark:text-gray-50',
				variant === 'outlined' && defaultPadding && 'py-3 px-6',
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
}
