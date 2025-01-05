import type { Prefecture } from '@/api/prefectures/types';

export const getCheckedPrefectures = (
  prefectures: Prefecture[],
  pref?: string | string[],
) => {
  if (!pref) {
    return [];
  }
  const prefCodes = Array.isArray(pref) ? pref : [pref];
  return prefCodes
    .map((prefCode) => prefectures.find((p) => Number(prefCode) === p.prefCode))
    .filter((prefCode) => prefCode !== undefined);
};
