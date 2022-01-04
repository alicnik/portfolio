import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';

export const Root = DropdownPrimitive.Root;
export const Trigger = DropdownPrimitive.Trigger;
export const CheckItem = DropdownPrimitive.CheckboxItem;

export const Content = ({
	children,
	...props
}: React.PropsWithChildren<DropdownPrimitive.DropdownMenuContentProps>) => (
	<DropdownPrimitive.Content
		className="bg-gray-50 shadow dark:bg-gray-900 dark:shadow-gray-50"
		{...props}
	>
		{children}
	</DropdownPrimitive.Content>
);
