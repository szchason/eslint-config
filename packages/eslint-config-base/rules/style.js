module.exports = {
  rules: {
    'array-bracket-newline': [ 'error', { multiline: true } ],
    'array-bracket-spacing': [
      'error',
      'always',
      {
        singleValue: false,
        objectsInArrays: true,
        arraysInArrays: true,
      },
    ],
    'array-element-newline': [
      'error',
      {
        multiline: true, minItems: 3,
      },
    ],
    'block-spacing': [ 'error', 'always' ],
    'brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: true },
    ],
    camelcase: [
      'error',
      {
        properties: 'never', ignoreDestructuring: true,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'comma-spacing': [
      'error',
      {
        before: false, after: true,
      },
    ],
    'comma-style': [ 'error', 'last' ],
    'computed-property-spacing': [ 'error', 'never' ],
    'eol-last': [ 'error', 'always' ],
    'func-call-spacing': [ 'error', 'never' ],
    'func-name-matching': [
      'off',
      'always',
      {
        includeCommonJSModuleExports: false,
        considerPropertyDescriptor: true,
      },
    ],
    'func-names': 'warn',
    'func-style': [ 'off', 'expression' ],
    'function-paren-newline': [ 'error', 'multiline-arguments' ],
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': [ 'error', 'beside' ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    indent: [ 'error', 2 ],
    'jsx-quotes': [ 'off', 'prefer-double' ],
    // 'keyword-spacing': [
    //   'error',
    //   {
    //     before: true,
    //     after: true,
    //     overrides: {
    //       'return': { after: true },
    //       'throw': { after: true },
    //       'case': { after: true },
    //     },
    //   },
    // ],
    'line-comment-position': [
      'off',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true,
      },
    ],
    'linebreak-style': [ 'error', 'unix' ],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: false },
    ],
    'max-depth': [ 'off', 4 ],
    'max-len': [
      'error',
      150,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'max-lines': [
      'off',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-lines-per-function': [
      'off',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],
    'max-nested-callbacks': 'off',
    'max-params': [ 'off', 3 ],
    'max-statements': [ 'off', 10 ],
    'max-statements-per-line': [ 'off', { max: 1 } ],
    'multiline-comment-style': [ 'off', 'starred-block' ],
    'multiline-ternary': [ 'error', 'always-multiline' ],
    'new-cap': [
      'error',
      {
        newIsCap: true, capIsNew: true,
      },
    ],
    'new-parens': 'error',
    'newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 4 } ],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-operators': [
      'error',
      {
        groups: [
          [ '%', '**' ],
          [ '%', '+' ],
          [ '%', '-' ],
          [ '%', '*' ],
          [ '%', '/' ],
          [ '/', '*' ],
          [
            '&',
            '|',
            '<<',
            '>>',
            '>>>',
          ],
          [
            '==',
            '!=',
            '===',
            '!==',
          ],
          [ '&&', '||' ],
        ],
        allowSamePrecedence: false,
      },
    ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': ['error'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1, maxBOF: 0, maxEOF: 0,
      },
    ],
    'no-negated-condition': 'off',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'error',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      },
    ],
    'no-unneeded-ternary': [ 'error', { defaultAssignment: false } ],
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': [
      'error',
      'beside',
      { overrides: {} },
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
        ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
        ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
        ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      },
    ],
    'object-curly-spacing': [ 'error', 'always' ],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    'one-var': [ 'error', 'never' ],
    'one-var-declaration-per-line': [ 'error', 'always' ],
    'operator-assignment': [ 'error', 'always' ],
    'operator-linebreak': [
      'error',
      'before',
      { overrides: { '=': 'none' } },
    ],
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
      {
        allowSingleLineBlocks: true,
      },
    ],
    'padding-line-between-statements': 'off',
    'prefer-exponentiation-operator': 'error',
    'quote-props': [
      'error',
      'as-needed',
      { keywords: true, numbers: false },
    ],
    quotes: [ 'error', 'single' ],
    semi: [
      'error',
      'always',
      { omitLastInOneLineBlock: true },
    ],
    'semi-spacing': [ 'error', { before: false, after: false } ],
    'semi-style': [ 'error', 'last' ],
    'sort-keys': [
      'off',
      'asc',
      { caseSensitive: false, natural: true },
    ],
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-infix-ops': [ 'error', { int32Hint: true } ],
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],
    'switch-colon-spacing': [
      'error',
      {
        after: true, before: false,
      },
    ],
    'unicode-bom': [ 'error', 'never' ],
    'wrap-regex': 'off',
  },
};
