import type { FC } from 'react';

import { clsx } from 'clsx';

import styles from './prefectureSkeleton.module.css';

type PrefectureCardSkeletonProps = {
  className?: string;
};

export const PrefectureSkeleton: FC<PrefectureCardSkeletonProps> = ({
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
