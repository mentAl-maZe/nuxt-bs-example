module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/standard',
    'prettier/vue'
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'no-debugger': 'warn',
    'no-console': 'warn'
  },
  overrides: [
    {
      files: ['**/*.ts'],
      rules: {
        'no-unused-vars': ['off'],
        'no-undef': ['off']
      }
    }
  ]
}
