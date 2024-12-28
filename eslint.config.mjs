import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';
import storybookPlugin from 'eslint-plugin-storybook';
import jestPlugin from 'eslint-plugin-jest';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type { import("eslint").Linter.Config[] } */
const eslintConfig = [
  {
    ignores: ['dist', '.next'],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...storybookPlugin.configs['flat/recommended'],
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: { 'unused-imports': unusedImportsPlugin },
    rules: {
      complexity: ['error', { max: 10 }], // 複雑度を10に制限
      // 行数を制限
      'max-lines': [
        'error',
        {
          max: 300,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      // 関数ごとの行数を制限
      'max-lines-per-function': [
        'error',
        {
          IIFEs: true,
          max: 150,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      'no-console': 'warn', // console を警告
      'import/no-default-export': 'error', // default export を禁止
      // import の順序を統一
      'import/order': [
        'error',
        {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          pathGroups: [
            {
              group: 'external',
              pattern: 'react',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
      'unused-imports/no-unused-imports': 'error', // import が未使用の場合はエラー
      '@typescript-eslint/no-unused-vars': 'off', // TypeScript の未使用変数チェックを無効化
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // eslint-plugin-react の追加ルール
      'react/destructuring-assignment': 'error', // propsの分割代入を強制
      'react/hook-use-state': 'error', // useState の命名を [value, setValue] に統一
      'react/jsx-sort-props': 'error', // props の並び順を統一
      'react/jsx-fragments': 'error', // Fragment は省略
      'react/jsx-no-useless-fragment': 'error', // 不要な Fragment は削除
      'react/self-closing-comp': 'error', // 子要素がない場合は自己終了タグに統一
      'react/no-danger': 'error', // dangerouslySetInnerHTML を許可しない
    },
  },
  {
    /*
     * 以下のファイルは default export を許可
     * - .config ファイル
     * - /app配下のpage, layout
     * - .storybook 配下のファイル
     * - .scaffdog 配下のファイル
     */
    files: [
      '**/*.config.{js,jsx,ts,tsx}',
      'src/app/**/{page,layout}.{js,jsx,ts,tsx}',
      'src/**/*.{stories,story}.{js,jsx,ts,tsx}',
      '.storybook/**/*.{js,jsx,ts,tsx}',
      '.scaffdog/**/*.{js,jsx,ts,tsx}',
    ],
    rules: {
      'import/no-default-export': 'off',
    },
  },
  {
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}'],
    plugins: { jest: jestPlugin },
    languageOptions: {
      globals: jestPlugin.environments.globals.globals,
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',

      // 一部のルールを無効化
      'max-lines': 'off',
      'max-lines-per-function': 'off',
      complexity: 'off',
    },
  },
  eslintConfigPrettier,
];

export default eslintConfig;
