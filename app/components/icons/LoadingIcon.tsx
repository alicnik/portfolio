import { AccessibleIcon } from '~/components/radix';
import { IconProps } from '.';
import { UpdateIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';

export function LoadingIcon({ label = 'Loading', className }: IconProps) {
	return (
		<AccessibleIcon label={label}>
			<UpdateIcon className={clsx('animate-spin', className)} />
		</AccessibleIcon>
	);
}
