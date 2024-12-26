import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';

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
  {
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
     * - /app配下のpage, layout
     * - config.js などの設定ファイル
     */
    files: [
      'src/app/**/{page,layout}.{js,jsx,ts,tsx}',
      '**.config.{js,mjs,cjs,ts}',
    ],
    rules: {
      'import/no-default-export': 'off',
    },
  },
  {
    // test ファイルでは特定のルールを無効化
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}'],
    rules: {
      'max-lines': 'off',
      'max-lines-per-function': 'off',
      complexity: 'off',
    },
  },
  eslintConfigPrettier,
];

export default eslintConfig;
