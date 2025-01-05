'use server';

import { api } from '@/api/client';
import { handleApiError } from '@/api/helpers/errorHandler';
import type { PopulationCompositionPerYearResponse } from '@/api/population/composition/perYear/types';

export const fetchPopulationCompositionPerYear = async (
  prefCode: number,
): Promise<PopulationCompositionPerYearResponse> => {
  try {
    const res = await api.apiV1PopulationCompositionPerYearGet(
      {
        prefCode: prefCode.toString(),
      },
      {
        next: { revalidate: 3600 },
      },
    );
    return res.result;
  } catch (error) {
    handleApiError(error);
    return {
      boundaryYear: 0,
      data: [],
    };
  }
};
