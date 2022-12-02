module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:jest/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '**/*.test.js', '**/*.test.jsx'],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/no-shadow': ['warn'],
        'no-unused-vars': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [1, {extensions: ['.ts', '.tsx']}], //should add ".ts" if typescript project
      },
    },
  ],
};
