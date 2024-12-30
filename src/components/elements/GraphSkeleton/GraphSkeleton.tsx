import type { FC } from 'react';

import { clsx } from 'clsx';

import styles from './graphSkeleton.module.css';

type GraphSkeletonProps = {
  className?: string;
};

export const GraphSkeleton: FC<GraphSkeletonProps> = ({ className }) => {
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
            points="10,150 30,140 50,120 70,110 90,130 110,140 130,100 150,80 170,90 190,70 210,100 230,120 250,70 270,60 290,90 310,50 330,70 350,40 370,60 390,50 410,45 430,70 450,30 470,50 490,20"
          />
          {[
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
          ].map((point, index) => (
            <circle
              className={styles.point}
              cx={point.cx}
              cy={point.cy}
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
