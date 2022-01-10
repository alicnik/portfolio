const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
	mode: 'jit',
	purge: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Raleway', ...defaultTheme.fontFamily.sans],
				graphic: ['"IM Fell English"', ...defaultTheme.fontFamily.serif],
				display: ['"Merriweather"', ...defaultTheme.fontFamily.serif],
			},
			keyframes: {
				hamburgerTopOpen: {
					'0%': { transform: 'none' },
					'50%': { transform: 'translateY(12px)' },
					'100%': { transform: 'translateY(12px) rotate(45deg) scaleX(1.2)' },
				},
				hamburgerTopClose: {
					'0%': { transform: 'translateY(12px) rotate(-45deg) scaleX(1.2)' },
					'50%': { transform: 'translateY(12px)' },
					'100%': { transform: 'none' },
				},
				hamburgerBottomOpen: {
					'0%': { transform: 'none' },
					'50%': { transform: 'translateY(-12px)' },
					'100%': { transform: 'translateY(-12px) rotate(-45deg) scaleX(1.2)' },
				},
				hamburgerBottomClose: {
					'0%': { transform: 'translateY(-12px) rotate(45deg) scaleX(1.2)' },
					'50%': { transform: 'translateY(-12px)' },
					'100%': { transform: 'none' },
				},
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
				'hamburger-top-open': 'hamburgerTopOpen 0.4s ease forwards',
				'hamburger-top-close': 'hamburgerTopClose 0.4s ease forwards',
				'hamburger-bottom-open': 'hamburgerBottomOpen 0.4s ease forwards',
				'hamburger-bottom-close': 'hamburgerBottomClose 0.4s ease forwards',
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
