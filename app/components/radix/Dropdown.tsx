import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';

export const Root = DropdownPrimitive.Root;
export const Trigger = DropdownPrimitive.Trigger;
export const CheckItem = DropdownPrimitive.CheckboxItem;
export const ItemIndicator = DropdownPrimitive.ItemIndicator;

export const Content = ({
	children,
	...props
}: React.PropsWithChildren<DropdownPrimitive.DropdownMenuContentProps>) => (
	<DropdownPrimitive.Content
		className="p-2 rounded bg-gray-50 shadow-md dark:bg-gray-800 dark:shadow-gray-900"
		{...props}
	>
		{children}
	</DropdownPrimitive.Content>
);
