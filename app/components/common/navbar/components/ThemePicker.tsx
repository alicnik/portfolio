import * as React from 'react';
import { ThemePreference, useThemePreference } from '~/context';
import { Dropdown, VisuallyHidden } from '~/components/radix';
import { GlobeIcon, MoonIcon, SunIcon, LoadingIcon } from '~/components/icons';

const themeOptions: ThemePreference[] = ['dark', 'light', 'system'];

export function ThemePicker() {
	const [themeIcon, setThemeIcon] = React.useState<React.ReactNode>(
		<LoadingIcon />,
	);
	const { themePreference, updateThemePreference } = useThemePreference();

	React.useEffect(() => {
		if (!themePreference) return;
		setThemeIcon(themeIcons[themePreference]);
	}, [themePreference]);

	return (
		<Dropdown.Root>
			<Dropdown.Trigger asChild>
				<span>{themeIcon}</span>
			</Dropdown.Trigger>
			<Dropdown.Content className="py-2 flex flex-col gap-1" sideOffset={10}>
				{themeOptions.map((option) => (
					<Dropdown.CheckItem
						key={option}
						className="capitalize cursor-pointer flex gap-2 items-center"
						checked={themePreference === option}
						onCheckedChange={(checked) => {
							if (checked) updateThemePreference(option);
						}}
					>
						{themeIcons[option]}
						<span className="leading-snug">{option}</span>
					</Dropdown.CheckItem>
				))}
			</Dropdown.Content>
		</Dropdown.Root>
	);
}

const themeIcons: { [index: string]: React.ReactNode } = {
	light: <SunIcon />,
	dark: <MoonIcon />,
	system: <GlobeIcon />,
};
