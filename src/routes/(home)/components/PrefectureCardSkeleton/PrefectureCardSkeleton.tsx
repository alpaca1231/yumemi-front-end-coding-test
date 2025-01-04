import type { FC } from 'react';

import { clsx } from 'clsx';

import styles from './prefectureCardSkeleton.module.css';

type PrefectureCardSkeletonProps = {
  className?: string;
};

export const PrefectureCardSkeleton: FC<PrefectureCardSkeletonProps> = ({
  className,
}) => {
  return (
    <div
      aria-busy="true"
      className={clsx(styles.skeleton, className)}
      role="status"
    />
  );
};
