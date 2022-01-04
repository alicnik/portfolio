import * as PopoverPrimitive from '@radix-ui/react-popover';

export const PopoverRoot = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverAnchor = PopoverPrimitive.Anchor;
export const PopoverClose = PopoverPrimitive.Close;

export const PopoverContent = ({
	children,
	...props
}: React.PropsWithChildren<PopoverPrimitive.PopoverContentProps>) => (
	<PopoverPrimitive.Content
		className="p-4 rounded bg-gray-50 shadow shadow-gray-900 dark:bg-gray-900 dark:shadow-gray-50"
		{...props}
	>
		{children}
	</PopoverPrimitive.Content>
);
