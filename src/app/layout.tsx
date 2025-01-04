import clsx from 'clsx';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';

import '@acab/reset.css';
import '@/styles/globals.css';
import { Footer } from '@/components/layout/Footer/Footer';
import { Header } from '@/components/layout/Header';

import styles from './layout.module.css';

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--noto-sans-jp',
});

export const metadata: Metadata = {
  title: '都道府県別の総人口推移グラフ',
  description: '株式会社ゆめみのフロントエンドコーディング試験',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={clsx(styles.container, notoSansJp.variable)}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
