import { AccessibleIcon } from '~/components/radix';
import { AccessibleIconProps } from '.';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';

export function ContactIcon({
	label = 'Contact icon',
	className = 'scale-125',
}: AccessibleIconProps) {
	return (
		<AccessibleIcon label={label}>
			<EnvelopeClosedIcon className={className} />
		</AccessibleIcon>
	);
}
