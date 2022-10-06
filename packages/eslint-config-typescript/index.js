module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  'extends': [ '@szchason/eslint-config-base', 'plugin:@typescript-eslint/recommended' ], // 'plugin:@typescript-eslint/recommended'
  overrides: [
    {
      files: [
        '*.ts',
        '*.mts',
        '*.cts',
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-member-accessibility': 'error',
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
  },
  rules: {
    // Base Rules
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        enums: 'always-multiline',
      },
    ],
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': [ 'error', 'never' ],
    '@typescript-eslint/member-delimiter-style': 'error',
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-explicit-any': 'off', // 不允许使用any
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': [
      'error',
      'all',
      {
        ignoreJSX: 'all',
      },
    ],
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true, ignoreProperties: true,
      },
    ],
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': [
      'error',
      {
        ignoreDeclarationMerge: false,
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: true,
        allowNamedExports: true,
        enums: true,
        typedefs: true,
      },
    ],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    quotes: 'off',
    '@typescript-eslint/quotes': [ 'error', 'single' ],
    semi: 'off',
    '@typescript-eslint/semi': [
      'error',
      'always',
      { omitLastInOneLineBlock: true },
    ],
    '@typescript-eslint/typedef': [
      'error',
      {
        memberVariableDeclaration: true,
        propertyDeclaration: true,
      },
    ],
    '@typescript-eslint/unified-signatures': 'warn',

    // Formatting Rules
    'brace-style': 'off',
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: true },
    ],
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': [
      'error',
      {
        before: false, after: true,
      },
    ],
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': [ 'error', 'never' ],
    indent: 'off',
    '@typescript-eslint/indent': [ 'error', 2 ],
    // keyword-spacing
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      {
        exceptAfterOverload: true,
      },
    ],
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': [ 'error', 'always' ],
    'padding-line-between-statements': 'off',
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: [ 'interface', 'type' ],
      },
    ],
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': [ 'error', 'always' ],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [ 'error', 'never' ],
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': [ 'error', { int32Hint: true } ],
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        overrides: {
          colon: {
            before: true,
            after: false,
          },
          arrow: {
            before: true,
            after: true,
          },
          property: {
            before: false,
            after: true,
          },
        },
      },
    ],

    // Deprecated rules
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': 'error',
    '@typescript-eslint/no-implicit-any-catch': 'warn',
  },
};
