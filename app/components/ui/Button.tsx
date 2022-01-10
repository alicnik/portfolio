import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'filled' | 'outlined';
}

const baseStyles = 'block py-1 px-3 font-sans rounded-sm dark:font-bold';

export function Button({
	className = '',
	variant = 'filled',
	children,
	...props
}: ButtonProps) {
	// Ensure that Tailwind classes provided in `className`
	// successfully override the base Tailwind classes
	const resolvedBaseClasses = baseStyles
		.split(' ')
		.filter((cls) => {
			return !className
				.split(' ')
				.some((c) => cls.startsWith(c.substring(0, c.indexOf('-'))));
		})
		.concat(className)
		.join(' ');

	return (
		<button
			className={clsx(
				resolvedBaseClasses,
				variant === 'filled' &&
					'bg-gray-800 dark:bg-gray-200 text-gray-50 dark:text-gray-800',
				variant === 'outlined' &&
					'border border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-50',
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
}
