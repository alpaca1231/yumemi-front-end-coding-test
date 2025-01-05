'use client';

import type { FC } from 'react';

import type { Prefecture } from '@/api/prefectures/types';
import { useCheckedPrefectures } from '@/routes/(home)/hooks/useCheckedPrefectures/useCheckedPrefectures';

import { PrefectureListPresenter } from './PrefectureListPresenter';

type PrefectureListContainerProps = {
  prefectures: Prefecture[];
  className?: string;
};

export const PrefectureListContainer: FC<PrefectureListContainerProps> = ({
  prefectures,
  className,
}) => {
  const { checkedPrefectures, handleOnChange } =
    useCheckedPrefectures(prefectures);

  return (
    <PrefectureListPresenter
      checkedPrefectures={checkedPrefectures}
      className={className}
      onChange={handleOnChange}
      prefectures={prefectures}
    />
  );
};
