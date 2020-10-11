module.exports = {
	root: true,
	env: {
		es2020: true,
		node: true,
	},
	extends: ['airbnb', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		parserOptions: 'tsconfig.json',
	},
	settings: {
		'import/extensions': ['.js'],
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx'],
			},
		},
	},
	plugins: ['prettier'],
	rules: {
		'no-unused-vars': 0,
		'no-useless-constructor': 'off',
		'no-explicit-any': 'off',
		'import/extensions': 'off',
		'no-empty-function': 0,
		'consistent-return': 0,
		'no-param-reassign': ['error', { props: false }],
		'class-methods-use-this': 0,
		'import/prefer-default-export': ['off'],
		'no-useless-catch': 0,
	},
};
