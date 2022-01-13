import { AccessibleIcon } from '~/components/radix';
import { AccessibleIconProps } from '.';
import { ReaderIcon } from '@radix-ui/react-icons';

export function BlogIcon({
	label = 'Blog icon',
	className = 'scale-125',
}: AccessibleIconProps) {
	return (
		<AccessibleIcon label={label}>
			<ReaderIcon className={className} />
		</AccessibleIcon>
	);
}
