module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'curly': ['warn'],
    'eqeqeq': ['warn'],
    'no-var': ['error'],
    'eol-last': ['warn'],
    'camelcase': ['warn'],
    'indent': ['warn', 2],
    'comma-style': ['warn'],
    'key-spacing': ['warn'],
    'comma-dangle': ['warn'],
    'prefer-const': ['warn'],
    'prefer-spread': ['warn'],
    'comma-spacing': ['warn'],
    'semi': ['error', 'never'],
    'keyword-spacing': ['warn'],
    'space-infix-ops': ['warn'],
    'quotes': ['warn', 'single'],
    'func-call-spacing': ['warn'],
    'no-trailing-spaces': ['warn'],
    'prefer-destructuring': ['warn'],
    'no-multiple-empty-lines': ['warn', {
      'max': 1
    }],
    'space-before-function-paren': ['warn'],
    'arrow-body-style': ['warn', 'as-needed'],
    'arrow-spacing': ['warn', {
      'before': true, 'after': true
    }],
    'vue/eqeqeq': 'warn',
    'vue/key-spacing': 'warn',
    'vue/comma-dangle': 'warn',
    'vue/arrow-spacing': 'warn',
    'vue/block-spacing': 'warn',
    'vue/space-unary-ops': 'warn',
    'vue/v-on-function-call': 'warn'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
