import { AccessibleIcon } from '~/components/radix';
import { IconProps } from '.';
import { MoonIcon as RadixMoonIcon } from '@radix-ui/react-icons';

export function MoonIcon({ label = 'Dark mode icon', className }: IconProps) {
	return (
		<AccessibleIcon label={label}>
			<RadixMoonIcon className={className} />
		</AccessibleIcon>
	);
}
