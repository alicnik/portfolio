import clsx from 'clsx';

export function Button(props: any) {
	return (
		<button
			className={clsx(
				`
          py-1 px-3 font-sans rounded 
          text-gray-50 bg-gray-800 
          dark:text-gray-800 dark:bg-gray-200 dark:font-bold
        `,
				props.className,
			)}
			{...props}
		>
			{props.children}
		</button>
	);
}
