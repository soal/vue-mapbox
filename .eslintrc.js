// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    jest: true
  },
  extends: 'vue',
  // required to lint *.vue files
  plugins: [
    'html',
    'import',
    'vue'
  ],
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': 1,
    "indent": [1, 2, { "SwitchCase": 1 }],
    "semi": [1],
    "quotes": [1, "single", "avoid-escape"],
    "space-before-function-paren": [0, "never"],
    "prefer-const": [0],
    "space-infix-ops": [0],
    "template-curly-spacing": [1],
    "no-multiple-empty-lines": [0]
  }
}
