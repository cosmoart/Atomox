import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [...compat.config({
	extends: 'next/core-web-vitals',
	rules: {
		'indent': [1, 'tab'],
		'no-tabs': 0,
		'jsx-quotes': [1, 'prefer-single'],
		'no-unused-vars': 1,
		'quotes': [1, 'single'],
		'no-trailing-spaces': 1,
		'comma-dangle': [1, 'only-multiline'],
	},
})]

export default eslintConfig;
