module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
  ],
  'extends': [
    '@szchason/eslint-config-base',
    './rules/react.js',
    './rules/react-a11y.js',
    './rules/react-hooks.js',
  ],
  rules: {

  },
};
