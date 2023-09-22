import { AccessibleIcon } from '~/components/radix';
import type { AccessibleIconProps } from '.';
import { ChatBubbleIcon } from '@radix-ui/react-icons';

export function TestimonialsIcon({
	label = 'Testimonials icon',
	className = 'scale-125',
}: AccessibleIconProps) {
	return (
		<AccessibleIcon label={label}>
			<ChatBubbleIcon className={className} />
		</AccessibleIcon>
	);
}
