// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    'browser': true,
    'es6': true,
    'worker': true,
    'serviceworker': true,
    'jest': true
  },
  plugins: [
    'import',
    'html'
  ],
  extends: ['eslint-config-standard'],
  'rules': {
    'jsx-quotes': 1,
    'indent': ['error', 2],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,
    'comma-dangle': [2, 'never'],
    'complexity': 2,
    'space-before-function-paren': [0, 'never'],
    'no-unused-vars': 1,
    'camelcase': 2
  }
}
