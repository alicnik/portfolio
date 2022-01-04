import { ThemePreference, useThemePreference } from '~/context';
import { Dropdown } from '~/components/radix';

const themeOptions: ThemePreference[] = ['dark', 'light', 'system'];

export function ThemePicker() {
	const { themePreference, updateThemePreference } = useThemePreference();
	return (
		<Dropdown.Root>
			<Dropdown.Trigger>Preference</Dropdown.Trigger>
			<Dropdown.Content>
				{themeOptions.map((option) => (
					<Dropdown.CheckItem
						key={option}
						className="capitalize"
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
