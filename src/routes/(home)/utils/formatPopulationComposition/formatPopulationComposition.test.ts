import type { PopulationCompositionPerYear } from '@/api/population/composition/perYear/types';
import type { Prefecture } from '@/api/prefectures/types';

import { formatPopulationComposition } from './formatPopulationComposition';

describe('formatPopulationComposition', () => {
  const mockData: (Prefecture & PopulationCompositionPerYear)[] = [
    {
      prefCode: 1,
      prefName: '北海道',
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
          ],
        },
      ],
    },
    {
      prefCode: 2,
      prefName: '青森県',
      boundaryYear: 2020,
      data: [
        {
          label: '総人口',
          data: [
            {
              year: 1960,
              value: 1426606,
            },
            {
              year: 1965,
              value: 1416591,
            },
          ],
        },
        {
          label: '年少人口',
          data: [
            {
              year: 1960,
              value: 513397,
              rate: 35.99,
            },
            {
              year: 1965,
              value: 447068,
              rate: 31.56,
            },
          ],
        },
      ],
    },
  ];

  it('データを正しい形式にフォーマットする', () => {
    const result = formatPopulationComposition(mockData);

    expect(result).toEqual([
      {
        label: '総人口',
        data: [
          {
            year: 1960,
            populationPerPrefecture: {
              北海道: 5039206,
              青森県: 1426606,
            },
          },
          {
            year: 1965,
            populationPerPrefecture: {
              北海道: 5171800,
              青森県: 1416591,
            },
          },
        ],
      },
      {
        label: '年少人口',
        data: [
          {
            year: 1960,
            populationPerPrefecture: {
              北海道: 1681479,
              青森県: 513397,
            },
          },
          {
            year: 1965,
            populationPerPrefecture: {
              北海道: 1462123,
              青森県: 447068,
            },
          },
        ],
      },
    ]);
  });

  it('空の配列が渡された場合は空の配列を返す', () => {
    const result = formatPopulationComposition([]);
    expect(result).toEqual([]);
  });
});
