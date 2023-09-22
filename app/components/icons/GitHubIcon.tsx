import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { AccessibleIcon } from '~/components/radix';
import type { AccessibleIconProps } from '.';

export function GitHubIcon({
	label = 'GitHub icon',
	className = 'scale-125',
}: AccessibleIconProps) {
	return (
		<AccessibleIcon label={label}>
			<GitHubLogoIcon className={className} />
		</AccessibleIcon>
	);
}
