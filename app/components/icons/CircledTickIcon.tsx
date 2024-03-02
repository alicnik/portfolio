import { AccessibleIcon } from '~/components/radix';
import { AccessibleIconProps } from '.';
import { CheckCircledIcon } from '@radix-ui/react-icons';

export function CircledTickIcon({
	label = 'Tick icon',
	className = 'scale-125',
}: AccessibleIconProps) {
	return (
		<AccessibleIcon label={label}>
			<CheckCircledIcon className={className} />
		</AccessibleIcon>
	);
}
