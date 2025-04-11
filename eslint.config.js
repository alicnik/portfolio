import js from '@eslint/js';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config([
	js.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
			},
		},
		rules: {
			'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		},
	},

	// React
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		plugins: {
			react,
			'jsx-a11y': jsxA11y,
		},
		...react.configs.flat.recommended,
		...react.configs.flat['jsx-runtime'],
		...reactHooks.configs.recommended,
		...jsxA11y.flatConfigs.recommended,
		settings: {
			react: {
				version: 'detect',
			},
			formComponents: ['Form'],
			linkComponents: [
				{ name: 'Link', linkAttribute: 'to' },
				{ name: 'NavLink', linkAttribute: 'to' },
			],
			'import/resolver': {
				typescript: {},
			},
		},
	},

	// Typescript
	{
		files: ['**/*.{ts,tsx}'],
		plugins: {
			'@typescript-eslint': tseslint.plugin,
		},
		languageOptions: {
			parser: tseslint.parser,
		},
		settings: {
			'import/internal-regex': '^~/',
			'import/resolver': {
				node: {
					extensions: ['.ts', '.tsx'],
				},
				typescript: {
					alwaysTryTypes: true,
				},
			},
		},
		extends: [tseslint.configs.recommended],
	},
]);
