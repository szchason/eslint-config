module.exports = {
  rules: {
    'init-declarations': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-shadow': [ 'error', { builtinGlobals: true } ],
    'no-shadow-restricted-names': 'error',
    'no-undef': ['error'],
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': 'error',
    'no-use-before-define': [
      'error',
      {
        functions: true, classes: true,
      },
    ],
  },
};
