import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { AccessibleIcon } from '~/components/radix';
import { IconProps } from '.';

export function GitHubIcon({
	label = 'GitHub icon',
	className = 'scale-125',
}: IconProps) {
	return (
		<AccessibleIcon label={label}>
			<GitHubLogoIcon className={className} />
		</AccessibleIcon>
	);
}
