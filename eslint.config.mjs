import json from '@eslint/json';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

export default defineConfig([
  {
    ignores: ['**/*.js', '**/*.cjs', '**/*.mjs'],
  },
  {
    files: ['src/**/*.json'],
    plugins: {
      json,
    },
    language: 'json/json',
  },

  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
      eqeqeq: ['error', 'always'],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'warn',
    },
  },
]);
