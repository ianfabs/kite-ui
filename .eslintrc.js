module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-unused-components': 'warning',
    'vue/no-unused-vars': 'warning',
    'vue/require-v-for-key': 'warning',
    'vue/use-v-on-exact': 'warning'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
