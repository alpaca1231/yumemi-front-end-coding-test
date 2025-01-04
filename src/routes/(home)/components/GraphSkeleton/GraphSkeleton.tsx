import type { FC } from 'react';

import { clsx } from 'clsx';

import styles from './graphSkeleton.module.css';

type GraphSkeletonProps = {
  className?: string;
};

export const GraphSkeleton: FC<GraphSkeletonProps> = ({ className }) => {
  const points = [
    { cx: 10, cy: 150 },
    { cx: 30, cy: 140 },
    { cx: 50, cy: 120 },
    { cx: 70, cy: 110 },
    { cx: 90, cy: 130 },
    { cx: 110, cy: 140 },
    { cx: 130, cy: 100 },
    { cx: 150, cy: 80 },
    { cx: 170, cy: 90 },
    { cx: 190, cy: 70 },
    { cx: 210, cy: 100 },
    { cx: 230, cy: 120 },
    { cx: 250, cy: 70 },
    { cx: 270, cy: 60 },
    { cx: 290, cy: 90 },
    { cx: 310, cy: 50 },
    { cx: 330, cy: 70 },
    { cx: 350, cy: 40 },
    { cx: 370, cy: 60 },
    { cx: 390, cy: 50 },
    { cx: 410, cy: 45 },
    { cx: 430, cy: 70 },
    { cx: 450, cy: 30 },
    { cx: 470, cy: 50 },
    { cx: 490, cy: 20 },
  ];

  return (
    <div
      aria-busy="true"
      className={clsx(styles.skeletonContainer, className)}
      role="status"
    >
      <div className={styles.graphHeader}>
        <div className={styles.title} />
        <div className={styles.subtitle} />
      </div>
      <div className={styles.graphBody}>
        <svg className={styles.graph}>
          <polyline
            className={styles.line}
            points={points.map(({ cx, cy }) => `${cx},${cy}`).join(' ')}
          />
          {points.map(({ cx, cy }, index) => (
            <circle
              className={styles.point}
              cx={cx}
              cy={cy}
              key={index}
              r="4"
            />
          ))}
        </svg>
        <div className={styles.xAxis} />
        <div className={styles.yAxis} />
      </div>
    </div>
  );
};
