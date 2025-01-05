import type { FC } from 'react';

import { clsx } from 'clsx';

import type { Prefecture } from '@/api/prefectures/types';
import { Checkbox } from '@/components/elements/Checkbox';

import styles from './prefectureList.module.css';

type PrefectureListPresenterProps = {
  prefectures: Prefecture[];
  checkedPrefectures: Prefecture[];
  onChange: (prefCode: Prefecture['prefCode'], checked: boolean) => void;
  className?: string;
};

export const PrefectureListPresenter: FC<PrefectureListPresenterProps> = ({
  prefectures,
  checkedPrefectures,
  onChange,
  className,
}) => {
  return (
    <ul className={clsx(styles.prefectureList, className)}>
      {prefectures.map((prefecture) => (
        <li className={styles.item} key={prefecture.prefCode}>
          <Checkbox
            checked={checkedPrefectures.some(
              (checkedPrefecture) =>
                checkedPrefecture.prefCode === prefecture.prefCode,
            )}
            id={`prefecture-${prefecture.prefCode}`}
            label={prefecture.prefName}
            onChange={(checked) => onChange(prefecture.prefCode, checked)}
            value={prefecture.prefCode}
          />
        </li>
      ))}
    </ul>
  );
};
