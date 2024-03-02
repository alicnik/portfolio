import { AccessibleIcon } from '~/components/radix';
import { AccessibleIconProps } from '.';
import { CrossCircledIcon } from '@radix-ui/react-icons';

export function CircledCrossIcon({
	label = 'Cross icon',
	className = 'scale-125',
}: AccessibleIconProps) {
	return (
		<AccessibleIcon label={label}>
			<CrossCircledIcon className={className} />
		</AccessibleIcon>
	);
}
