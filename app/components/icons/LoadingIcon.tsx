import { AccessibleIcon } from '~/components/radix';
import { UpdateIcon } from '@radix-ui/react-icons';

// Classname disabled here as TW scale class conflicts with animation
interface IconProps {
	label?: string;
}

export function LoadingIcon({ label = 'Loading' }: IconProps) {
	return (
		<AccessibleIcon label={label}>
			<UpdateIcon className="animate-spin" />
		</AccessibleIcon>
	);
}
