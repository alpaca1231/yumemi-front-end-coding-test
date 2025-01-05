import type { FC } from 'react';

import clsx from 'clsx';

import { PrefectureSkeleton } from './PrefectureSkeleton';
import styles from './prefectureSkeletonList.module.css';

type PrefectureSkeletonListProps = {
  className?: string;
};

export const PrefectureSkeletonList: FC<PrefectureSkeletonListProps> = ({
  className,
}) => {
  return (
    <ul className={clsx(styles.wrapper, className)}>
      {[...Array(10)].map((_, index) => {
        return (
          <li key={index}>
            <PrefectureSkeleton />
          </li>
        );
      })}
    </ul>
  );
};
