# ゆめみ フロントエンドコーディング試験

[![Vercel Deploy](https://deploy-badge.vercel.app/vercel/yumemi-front-end-coding-test)](https://yumemi-front-end-coding-test.vercel.app/)
[![storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://main--676f8a2eefba37fca3dea243.chromatic.com)
[![codecov](https://codecov.io/github/alpaca1231/yumemi-front-end-coding-test/graph/badge.svg?token=COZH4M5YNL)](https://codecov.io/github/alpaca1231/yumemi-front-end-coding-test)

This was created based on the following source: [フロントエンドコーディング試験](https://yumemi.notion.site/0e9ef27b55704d7882aab55cc86c999d)

## Tech Stack

| stack      | version |
| ---------- | ------- |
| Next.js    | 15.1.3  |
| React      | 19.0.0  |
| Typescript | 5.7.2   |
| Recharts   | 2.15.0  |
| Storybook  | 8.4.7   |

[read more...](./package.json)

## Setup

> [!NOTE]
> 下記コマンドを実行するには `.node-version` に記載されたバージョンの Node.js が必要です。

**依存関係のインストール**

```sh
pnpm install
```

**環境変数の設定**

```sh
cp .env.local.example .env.local
```

**ローカル環境の起動**

```sh
pnpm dev
```

**Storybookの起動**

```sh
pnpm storybook
```

**build**

```sh
pnpm build
```

**コンポーネント作成時**

```sh
pnpm generate
```
