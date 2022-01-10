import { AccessibleIcon } from '~/components/radix';
import { AccessibleIconProps } from '.';
import { GlobeIcon as RadixGlobeIcon } from '@radix-ui/react-icons';

export function GlobeIcon({
	label = 'System theme setting icon',
	className,
}: AccessibleIconProps) {
	return (
		<AccessibleIcon label={label}>
			<RadixGlobeIcon className={className} />
		</AccessibleIcon>
	);
}
