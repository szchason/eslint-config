module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@szchason/eslint-config-base',
    'react',
    'react-hooks',
    'jsx-a11y',
  ],
  'extends': [
    './rules/react.js',
    './rules/react-a11y.js',
    './rules/react-hooks.js',
  ],
  rules: {

  },
};
