const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
	mode: 'jit',
	purge: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				mobile: { max: '768px' },
			},
			fontFamily: {
				sans: ['Raleway', ...defaultTheme.fontFamily.sans],
				graphic: ['"IM Fell English"', ...defaultTheme.fontFamily.serif],
				display: ['"Merriweather"', ...defaultTheme.fontFamily.serif],
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
				fadeOut: {
					'0%': { opacity: 1 },
					'100%': { opacity: 0 },
				},
				slideInLeft: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				slideOutLeft: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' },
				},
			},
			animation: {
				'fade-in': 'fadeIn 200ms ease-out',
				'fade-out': 'fadeOut 200ms ease-out',
				'slide-in-left': 'slideInLeft 200ms ease-out',
				'slide-out-left': 'slideOutLeft 200ms ease-out',
			},
		},
	},
	variants: {
		extend: {
			translate: ['data-state-open'],
		},
	},
	plugins: [
		plugin(({ addVariant, e }) => {
			addVariant('data-state-open', ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					const newClass = e(`data-state-open${separator}${className}`);
					return `.${newClass}[data-state="open"]`;
				});
			});
		}),
	],
};
