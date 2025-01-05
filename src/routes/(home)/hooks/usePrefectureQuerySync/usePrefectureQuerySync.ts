import { useCallback } from 'react';

import { useSearchParams, useRouter } from 'next/navigation';

import type { Prefecture } from '@/api/prefectures/types';

export const usePrefectureQuerySync = (
  prefectures: Prefecture[],
  checkedPrefectures: Prefecture[],
) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleOnChange = useCallback(
    (prefCode: Prefecture['prefCode'], checked: boolean) => {
      const target = prefectures.find((p) => p.prefCode === prefCode);
      if (!target) return;

      const newChecked = checked
        ? [...checkedPrefectures, target]
        : checkedPrefectures.filter((p) => p.prefCode !== target.prefCode);

      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.delete('pref');
      newChecked.forEach((p) =>
        newSearchParams.append('pref', p.prefCode.toString()),
      );
      router.push(newSearchParams ? `/?${newSearchParams.toString()}` : '/');
    },
    [checkedPrefectures, prefectures, router, searchParams],
  );

  return { handleOnChange };
};
