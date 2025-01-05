'use server';

import { api } from '@/api/client';
import { handleApiError } from '@/api/helpers/errorHandler';
import type { PrefecturesResponse } from '@/api/prefectures/types';

export const fetchPrefectures = async (): Promise<PrefecturesResponse> => {
  try {
    const res = await api.apiV1PrefecturesGet({
      cache: 'force-cache',
    });
    return res.result;
  } catch (error) {
    handleApiError(error);
    return [];
  }
};
