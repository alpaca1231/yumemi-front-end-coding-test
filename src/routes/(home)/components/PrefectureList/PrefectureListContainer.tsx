'use client';

import type { FC } from 'react';

import type { Prefecture } from '@/api/prefectures/types';
import { usePrefectureQuerySync } from '@/routes/(home)/hooks/usePrefectureQuerySync';

import { PrefectureListPresenter } from './PrefectureListPresenter';

type PrefectureListContainerProps = {
  checkedPrefectures: Prefecture[];
  prefectures: Prefecture[];
  className?: string;
};

export const PrefectureListContainer: FC<PrefectureListContainerProps> = ({
  checkedPrefectures,
  prefectures,
  className,
}) => {
  const { handleOnChange } = usePrefectureQuerySync(
    prefectures,
    checkedPrefectures,
  );

  return (
    <PrefectureListPresenter
      checkedPrefectures={checkedPrefectures}
      className={className}
      onChange={handleOnChange}
      prefectures={prefectures}
    />
  );
};
