import { api } from '@/api/client';
import type { PopulationCompositionPerYearResponse } from '@/shared';

import { fetchPopulationCompositionPerYear } from './services';

jest.mock('@/api/client', () => ({
  api: {
    apiV1PopulationCompositionPerYearGet: jest.fn(),
  },
}));

jest.mock('@/api/helpers/errorHandler', () => ({
  handleApiError: jest.fn(),
}));

describe('fetchPopulationCompositionPerYear', () => {
  const mockApiResponse: PopulationCompositionPerYearResponse = {
    message: null,
    result: {
      boundaryYear: 2020,
      data: [
        {
          label: '総人口',
          data: [
            {
              year: 1960,
              value: 5039206,
            },
            {
              year: 1965,
              value: 5171800,
            },
            {
              year: 1970,
              value: 5184287,
            },
            {
              year: 1975,
              value: 5338206,
            },
            {
              year: 1980,
              value: 5575989,
            },
            {
              year: 1985,
              value: 5679439,
            },
            {
              year: 1990,
              value: 5643647,
            },
            {
              year: 1995,
              value: 5692321,
            },
            {
              year: 2000,
              value: 5683062,
            },
            {
              year: 2005,
              value: 5627737,
            },
            {
              year: 2010,
              value: 5506419,
            },
            {
              year: 2015,
              value: 5381733,
            },
            {
              year: 2020,
              value: 5224614,
            },
            {
              year: 2025,
              value: 5016554,
            },
            {
              year: 2030,
              value: 4791592,
            },
            {
              year: 2035,
              value: 4546357,
            },
            {
              year: 2040,
              value: 4280427,
            },
            {
              year: 2045,
              value: 4004973,
            },
          ],
        },
        {
          label: '年少人口',
          data: [
            {
              year: 1960,
              value: 1681479,
              rate: 33.37,
            },
            {
              year: 1965,
              value: 1462123,
              rate: 28.27,
            },
            {
              year: 1970,
              value: 1309487,
              rate: 25.26,
            },
            {
              year: 1975,
              value: 1312611,
              rate: 24.59,
            },
            {
              year: 1980,
              value: 1298324,
              rate: 23.28,
            },
            {
              year: 1985,
              value: 1217959,
              rate: 21.45,
            },
            {
              year: 1990,
              value: 1034251,
              rate: 18.33,
            },
            {
              year: 1995,
              value: 898673,
              rate: 15.79,
            },
            {
              year: 2000,
              value: 792352,
              rate: 13.94,
            },
            {
              year: 2005,
              value: 719057,
              rate: 12.78,
            },
            {
              year: 2010,
              value: 657312,
              rate: 11.94,
            },
            {
              year: 2015,
              value: 608296,
              rate: 11.3,
            },
            {
              year: 2020,
              value: 555804,
              rate: 10.64,
            },
            {
              year: 2025,
              value: 511677,
              rate: 10.2,
            },
            {
              year: 2030,
              value: 465307,
              rate: 9.71,
            },
            {
              year: 2035,
              value: 423382,
              rate: 9.31,
            },
            {
              year: 2040,
              value: 391086,
              rate: 9.14,
            },
            {
              year: 2045,
              value: 360177,
              rate: 8.99,
            },
          ],
        },
        {
          label: '生産年齢人口',
          data: [
            {
              year: 1960,
              value: 3145664,
              rate: 62.42,
            },
            {
              year: 1965,
              value: 3460359,
              rate: 66.91,
            },
            {
              year: 1970,
              value: 3575731,
              rate: 68.97,
            },
            {
              year: 1975,
              value: 3657884,
              rate: 68.52,
            },
            {
              year: 1980,
              value: 3823808,
              rate: 68.58,
            },
            {
              year: 1985,
              value: 3910729,
              rate: 68.86,
            },
            {
              year: 1990,
              value: 3924717,
              rate: 69.54,
            },
            {
              year: 1995,
              value: 3942868,
              rate: 69.27,
            },
            {
              year: 2000,
              value: 3832902,
              rate: 67.44,
            },
            {
              year: 2005,
              value: 3696064,
              rate: 65.68,
            },
            {
              year: 2010,
              value: 3482169,
              rate: 63.24,
            },
            {
              year: 2015,
              value: 3190804,
              rate: 59.29,
            },
            {
              year: 2020,
              value: 2945727,
              rate: 56.38,
            },
            {
              year: 2025,
              value: 2781175,
              rate: 55.44,
            },
            {
              year: 2030,
              value: 2594718,
              rate: 54.15,
            },
            {
              year: 2035,
              value: 2394230,
              rate: 52.66,
            },
            {
              year: 2040,
              value: 2140781,
              rate: 50.01,
            },
            {
              year: 2045,
              value: 1931265,
              rate: 48.22,
            },
          ],
        },
        {
          label: '老年人口',
          data: [
            {
              year: 1960,
              value: 212063,
              rate: 4.21,
            },
            {
              year: 1965,
              value: 249318,
              rate: 4.82,
            },
            {
              year: 1970,
              value: 299069,
              rate: 5.77,
            },
            {
              year: 1975,
              value: 366651,
              rate: 6.87,
            },
            {
              year: 1980,
              value: 451727,
              rate: 8.1,
            },
            {
              year: 1985,
              value: 549487,
              rate: 9.68,
            },
            {
              year: 1990,
              value: 674881,
              rate: 11.96,
            },
            {
              year: 1995,
              value: 844927,
              rate: 14.84,
            },
            {
              year: 2000,
              value: 1031552,
              rate: 18.15,
            },
            {
              year: 2005,
              value: 1205692,
              rate: 21.42,
            },
            {
              year: 2010,
              value: 1358068,
              rate: 24.66,
            },
            {
              year: 2015,
              value: 1558387,
              rate: 28.96,
            },
            {
              year: 2020,
              value: 1664023,
              rate: 31.85,
            },
            {
              year: 2025,
              value: 1723702,
              rate: 34.36,
            },
            {
              year: 2030,
              value: 1731567,
              rate: 36.14,
            },
            {
              year: 2035,
              value: 1728745,
              rate: 38.02,
            },
            {
              year: 2040,
              value: 1748560,
              rate: 40.85,
            },
            {
              year: 2045,
              value: 1713531,
              rate: 42.79,
            },
          ],
        },
      ],
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('API呼び出しが成功した場合、人口構成データを返す', async () => {
    (api.apiV1PopulationCompositionPerYearGet as jest.Mock).mockResolvedValue({
      result: mockApiResponse,
    });

    const result = await fetchPopulationCompositionPerYear(1);

    expect(api.apiV1PopulationCompositionPerYearGet).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockApiResponse);
  });

  it('API呼び出しが失敗した場合、handleApiErrorを呼び出し、空の配列を返す', async () => {
    const mockError = new Error('API error');
    (api.apiV1PopulationCompositionPerYearGet as jest.Mock).mockRejectedValue(
      mockError,
    );

    const result = await fetchPopulationCompositionPerYear(1);

    expect(api.apiV1PopulationCompositionPerYearGet).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      boundaryYear: 0,
      data: [],
    });
  });
});
