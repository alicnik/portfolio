const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
				display: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
				accent: ['"IM Fell Great Primer"', '"Playfair Display"'],
			},
			keyframes: {
				hamburgerTopOpen: {
					'0%': {
						transform: 'none',
					},
					'50%': {
						transform: 'translateY(12px)',
					},
					'100%': {
						transform: 'translateY(12px) rotate(45deg) scaleX(1.2)',
					},
				},
				hamburgerTopClose: {
					'0%': {
						transform: 'translateY(12px) rotate(-45deg) scaleX(1.2)',
					},
					'50%': {
						transform: 'translateY(12px)',
					},
					'100%': {
						transform: 'none',
					},
				},
				hamburgerBottomOpen: {
					'0%': {
						transform: 'none',
					},
					'50%': {
						transform: 'translateY(-12px)',
					},
					'100%': {
						transform: 'translateY(-12px) rotate(-45deg) scaleX(1.2)',
					},
				},
				hamburgerBottomClose: {
					'0%': {
						transform: 'translateY(-12px) rotate(45deg) scaleX(1.2)',
					},
					'50%': {
						transform: 'translateY(-12px)',
					},
					'100%': {
						transform: 'none',
					},
				},
			},
			animation: {
				hamburgerTopOpen: 'hamburgerTopOpen 0.4s ease forwards',
				hamburgerTopClose: 'hamburgerTopClose 0.4s ease forwards',
				hamburgerBottomOpen: 'hamburgerBottomOpen 0.4s ease forwards',
				hamburgerBottomClose: 'hamburgerBottomClose 0.4s ease forwards',
			},
		},
	},
	variants: {},
	plugins: [],
};
