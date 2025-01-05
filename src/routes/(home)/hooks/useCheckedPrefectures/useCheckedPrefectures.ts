import { useCallback, useMemo } from 'react';

import { useSearchParams, useRouter } from 'next/navigation';

import type { Prefecture } from '@/api/prefectures/types';

export const useCheckedPrefectures = (prefectures: Prefecture[]) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pref = searchParams.getAll('pref');

  const checkedPrefectures = useMemo(
    () =>
      pref
        .map((prefCode) =>
          prefectures.find((p) => Number(prefCode) === p.prefCode),
        )
        .filter((prefCode) => prefCode !== undefined),
    [pref, prefectures],
  );

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
      router.push(`/?${newSearchParams}`);
    },
    [checkedPrefectures, prefectures, router, searchParams],
  );

  return { checkedPrefectures, handleOnChange };
};
