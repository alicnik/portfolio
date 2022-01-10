import { AccessibleIcon } from '~/components/radix';
import { IconProps } from '.';
import { GlobeIcon as RadixGlobeIcon } from '@radix-ui/react-icons';

export function GlobeIcon({
	label = 'System theme setting icon',
	className,
}: IconProps) {
	return (
		<AccessibleIcon label={label}>
			<RadixGlobeIcon className={className} />
		</AccessibleIcon>
	);
}
