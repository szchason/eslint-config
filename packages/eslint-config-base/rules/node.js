module.exports = {
  env: { node: true },
  rules: {
    'global-require': 'error',
    'handle-callback-err': 'off',
    'no-buffer-constructor': 'off',
    'no-mixed-requires': [ 'off', false ],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'off',
  },
};
