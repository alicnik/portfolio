import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';

export const Root = DropdownPrimitive.Root;
export const Trigger = DropdownPrimitive.Trigger;
export const CheckItem = DropdownPrimitive.CheckboxItem;
export const ItemIndicator = DropdownPrimitive.ItemIndicator;

export const Content = ({
	children,
	className,
	...props
}: React.PropsWithChildren<DropdownPrimitive.DropdownMenuContentProps>) => (
	<DropdownPrimitive.Content
		className={clsx(
			'p-3 pr-4 rounded bg-gray-50 shadow-md dark:bg-gray-800 dark:shadow-gray-900',
			className,
		)}
		{...props}
	>
		{children}
	</DropdownPrimitive.Content>
);
