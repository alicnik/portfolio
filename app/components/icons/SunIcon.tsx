import { AccessibleIcon } from '~/components/radix';
import { AccessibleIconProps } from '.';
import { SunIcon as RadixSunIcon } from '@radix-ui/react-icons';

export function SunIcon({
	label = 'Light mode icon',
	className,
}: AccessibleIconProps) {
	return (
		<AccessibleIcon label={label}>
			<RadixSunIcon className={className} />
		</AccessibleIcon>
	);
}
