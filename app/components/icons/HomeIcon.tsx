import { AccessibleIcon } from '~/components/radix';
import type { AccessibleIconProps } from '.';
import { HomeIcon as RadixHomeIcon } from '@radix-ui/react-icons';

export function HomeIcon({
	label = 'Home icon',
	className = 'scale-125',
}: AccessibleIconProps) {
	return (
		<AccessibleIcon label={label}>
			<RadixHomeIcon className={className} />
		</AccessibleIcon>
	);
}
