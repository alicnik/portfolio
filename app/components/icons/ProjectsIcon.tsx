import { AccessibleIcon } from '~/components/radix';
import { AccessibleIconProps } from '.';
import { LightningBoltIcon } from '@radix-ui/react-icons';

export function ProjectsIcon({
	label = 'Projects icon',
	className = 'scale-125',
}: AccessibleIconProps) {
	return (
		<AccessibleIcon label={label}>
			<LightningBoltIcon className={className} />
		</AccessibleIcon>
	);
}
