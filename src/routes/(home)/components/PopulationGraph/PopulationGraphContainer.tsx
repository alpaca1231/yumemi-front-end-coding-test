import type { FC } from 'react';

import { fetchPopulationCompositionPerYear } from '@/api/population/composition/perYear/services';
import type { Prefecture } from '@/api/prefectures/types';
import { PopulationGraphPresenter } from '@/routes/(home)/components/PopulationGraph/PopulationGraphPresenter';
import { formatPopulationComposition } from '@/routes/(home)/utils/formatPopulationComposition';

type PopulationGraphContainerProps = {
  checkedPrefectures: Prefecture[];
  className?: string;
};

export const PopulationGraphContainer: FC<
  PopulationGraphContainerProps
> = async ({ checkedPrefectures, className }) => {
  if (checkedPrefectures.length === 0) {
    return null;
  }

  const prefecturalYearlyPopulationData = await Promise.all(
    checkedPrefectures.map(async ({ prefCode, prefName }) => {
      const res = await fetchPopulationCompositionPerYear(prefCode);
      return {
        prefCode,
        prefName,
        ...res,
      };
    }),
  );

  const formatData = formatPopulationComposition(
    prefecturalYearlyPopulationData,
  );

  return (
    <PopulationGraphPresenter
      className={className}
      data={formatData}
      prefectures={checkedPrefectures}
    />
  );
};
