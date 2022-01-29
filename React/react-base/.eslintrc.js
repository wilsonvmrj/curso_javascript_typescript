module.exports = {
  env: {
    browser: true,
    es2021: true,

  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals:{
    Atomics:'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'prettier/prettier': 'error',
    'react',

  ],
  rules: {
  },
};
