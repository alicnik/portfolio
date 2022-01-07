import * as DialogPrimitive from '@radix-ui/react-dialog';

export const Root = DialogPrimitive.Root;
export const Trigger = DialogPrimitive.Trigger;
export const Title = DialogPrimitive.Title;
export const Overlay = DialogPrimitive.Overlay;
export const Close = DialogPrimitive.Close;

interface DialogComponentProps {
	className: string;
	children: React.ReactNode;
}

export function OverlayWithPortal(props: DialogComponentProps) {
	return (
		<DialogPrimitive.Portal forceMount>
			<DialogPrimitive.Overlay {...props} />
		</DialogPrimitive.Portal>
	);
}

export function Content(props: DialogComponentProps) {
	return <DialogPrimitive.Content {...props} />;
}
