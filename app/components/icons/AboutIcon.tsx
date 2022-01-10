import { AccessibleIcon } from '~/components/radix';
import { AccessibleIconProps } from '.';
import { PersonIcon } from '@radix-ui/react-icons';

export function AboutIcon({
	label = 'About icon',
	className = 'scale-125',
}: AccessibleIconProps) {
	return (
		<AccessibleIcon label={label}>
			<PersonIcon className={className} />
		</AccessibleIcon>
	);
}
