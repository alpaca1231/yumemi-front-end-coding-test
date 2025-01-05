import type { FC } from 'react';

import { clsx } from 'clsx';

import styles from './header.module.css';

type HeaderProps = {
  className?: string;
};

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={clsx(styles.wrapper, className)}>
      <h1 className={styles.title}>
        都道府県別の
        <wbr />
        総人口推移グラフ
      </h1>
      <p className={styles.subTitle}>
        株式会社ゆめみ フロントエンドコーディング試験
      </p>
    </header>
  );
};
