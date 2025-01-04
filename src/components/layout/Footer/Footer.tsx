import type { FC } from 'react';

import { clsx } from 'clsx';

import styles from './footer.module.css';

type FooterProps = {
  className?: string;
};

export const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer className={clsx(styles.wrapper, className)}>
      <p className={styles.copyright}>
        Copyright &copy; 2025 - All rights reserved
      </p>
    </footer>
  );
};
