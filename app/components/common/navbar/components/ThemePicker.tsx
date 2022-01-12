import * as React from 'react';
import { ThemePreference, useThemePreference } from '~/context';
import { Dropdown } from '~/components/radix';
import { GlobeIcon, MoonIcon, SunIcon, LoadingIcon } from '~/components/icons';

const themeOptions: ThemePreference[] = ['dark', 'light', 'system'];

export function ThemePicker() {
	const [themeIcon, setThemeIcon] = React.useState<React.ReactNode>(
		<LoadingIcon />,
	);
	const { themePreference, updateThemePreference } = useThemePreference();

	React.useEffect(() => {
		if (!themePreference) return;
		setThemeIcon(
			themePreference === 'light' ? (
				<SunIcon className="scale-150" />
			) : (
				<MoonIcon className="scale-150" />
			),
		);
	}, [themePreference]);

	return (
		<Dropdown.Root>
			<Dropdown.Trigger asChild>
				<span className="appearance-none">{themeIcon}</span>
			</Dropdown.Trigger>
			<Dropdown.Content
				className="pt-4 pr-6 pl-4 pb-3 flex flex-col gap-2"
				sideOffset={10}
			>
				{themeOptions.map((option) => (
					<Dropdown.CheckItem
						key={option}
						className="capitalize cursor-pointer flex gap-3 items-center text-lg"
						checked={themePreference === option}
						onCheckedChange={(checked) => {
							if (checked) updateThemePreference(option);
						}}
					>
						{themeIcons[option]}
						<span className="leading-[1.6]">{option}</span>
					</Dropdown.CheckItem>
				))}
			</Dropdown.Content>
		</Dropdown.Root>
	);
}

const themeIcons: { [index: string]: React.ReactNode } = {
	light: <SunIcon className="scale-125" />,
	dark: <MoonIcon className="scale-125" />,
	system: <GlobeIcon className="scale-125" />,
};
