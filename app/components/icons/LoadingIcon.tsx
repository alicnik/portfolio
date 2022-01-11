import { AccessibleIcon } from '~/components/radix';
import { UpdateIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';

interface IconProps {
	label?: string;
	className?: string;
}

export function LoadingIcon({ label = 'Loading', className }: IconProps) {
	return (
		<AccessibleIcon label={label}>
			<UpdateIcon className={clsx('animate-spin', className)} />
		</AccessibleIcon>
	);
}
