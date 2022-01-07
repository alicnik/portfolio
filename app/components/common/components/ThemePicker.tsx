import * as React from 'react';
import { ThemePreference, useThemePreference } from '~/context';
import { Dropdown } from '~/components/radix';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

const themeOptions: ThemePreference[] = ['dark', 'light', 'system'];

export function ThemePicker() {
	const [themeIcon, setThemeIcon] = React.useState<React.ReactNode>();
	const { themePreference, updateThemePreference } = useThemePreference();

	React.useEffect(() => {
		setThemeIcon(
			themePreference === 'light' ? (
				<SunIcon className="scale-125" />
			) : (
				<MoonIcon className="scale-125" />
			),
		);
	}, [themePreference]);

	return (
		<Dropdown.Root>
			<Dropdown.Trigger>{themeIcon}</Dropdown.Trigger>
			<Dropdown.Content className="py-2" sideOffset={10}>
				{themeOptions.map((option) => (
					<Dropdown.CheckItem
						key={option}
						className="capitalize cursor-pointer"
						checked={themePreference === option}
						onCheckedChange={(checked) => {
							if (checked) updateThemePreference(option);
						}}
					>
						{option}
					</Dropdown.CheckItem>
				))}
			</Dropdown.Content>
		</Dropdown.Root>
	);
}
