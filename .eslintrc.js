module.exports = { // eslint-disable-line no-undef
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
		"eslint:recommended",
    "plugin:react/recommended",
		"plugin:react/jsx-runtime"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',


  ],
  rules: {
		"react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    'prefer-template': 0,
    'react/no-children-prop': [0],
    'linebreak-style': 0,
  },
	root: true,
};
