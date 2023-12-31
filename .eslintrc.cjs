module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier', 'plugin:react/recommended'],
  plugins: ['react'],
  settings: {
    react: {
      version: '18.2.0',
    },
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    requreConfigFile: false,
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    'comma-dangle': ['error', 'only-multiline'],
    'curly': ['error', 'all'],
    'import/no-absolute-path': 'off',
    'key-spacing': ['error', { afterColon: true, beforeColon: false }],
    'keyword-spacing': ['error', { before: true }],
    'no-console': process.env.PROD ? 'warn' : 'off',
    'no-debugger': process.env.PROD ? 'warn' : 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-undef': process.env.PROD ? 'error' : 'warn',
    'no-unreachable': process.env.PROD ? 'error' : 'warn',
    'no-unused-vars': process.env.PROD ? 'error' : 'warn',
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'space-before-blocks': ['error', 'always'],
    'space-infix-ops': ['error', { int32Hint: false }],
    'react/no-unused-state': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
