import { AccessibleIcon } from '~/components/radix';
import type { AccessibleIconProps } from '.';
import { MoonIcon as RadixMoonIcon } from '@radix-ui/react-icons';

export function MoonIcon({
	label = 'Dark mode icon',
	className,
}: AccessibleIconProps) {
	return (
		<AccessibleIcon label={label}>
			<RadixMoonIcon className={className} />
		</AccessibleIcon>
	);
}
