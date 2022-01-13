import * as PopoverPrimitive from '@radix-ui/react-popover';

export const Root = PopoverPrimitive.Root;
export const Trigger = PopoverPrimitive.Trigger;
export const Anchor = PopoverPrimitive.Anchor;
export const Close = PopoverPrimitive.Close;

export const Content = ({
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
