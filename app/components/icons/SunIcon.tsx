import { AccessibleIcon } from '~/components/radix';
import { IconProps } from '.';
import { SunIcon as RadixSunIcon } from '@radix-ui/react-icons';

export function SunIcon({ label = 'Light mode icon', className }: IconProps) {
	return (
		<AccessibleIcon label={label}>
			<RadixSunIcon className={className} />
		</AccessibleIcon>
	);
}
