import { render } from '@testing-library/react';

import { fetchPopulationCompositionPerYear } from '@/api/population/composition/perYear/services';
import type { Prefecture } from '@/api/prefectures/types';

import { formatPopulationComposition } from '../../utils/formatPopulationComposition';

import { PopulationGraphContainer } from './PopulationGraphContainer';
import { PopulationGraphPresenter } from './PopulationGraphPresenter';

// モックデータ
const mockCheckedPrefectures: Prefecture[] = [
  { prefCode: 1, prefName: '北海道' },
  { prefCode: 2, prefName: '青森県' },
];

// モック関数
jest.mock('@/api/population/composition/perYear/services', () => ({
  fetchPopulationCompositionPerYear: jest.fn().mockResolvedValue({
    boundaryYear: 2020,
    data: [
      {
        label: '総人口',
        data: [
          { year: 1960, value: 6000000 },
          { year: 1970, value: 6500000 },
        ],
      },
    ],
  }),
}));

jest.mock('@/routes/(home)/utils/formatPopulationComposition', () => ({
  formatPopulationComposition: jest.fn().mockReturnValue([
    {
      label: '総人口',
      data: [
        { year: 1960, 北海道: 6000000, 青森県: 6000000 },
        { year: 1970, 北海道: 6500000, 青森県: 6500000 },
      ],
    },
  ]),
}));

jest.mock(
  '@/routes/(home)/components/PopulationGraph/PopulationGraphPresenter',
  () => ({
    PopulationGraphPresenter: jest.fn().mockReturnValue(null),
  }),
);

describe('PopulationGraphContainer', () => {
  it('チェックされた都道府県がない場合、nullを返す', async () => {
    const result = await PopulationGraphContainer({
      checkedPrefectures: [],
    });

    expect(result).toBeNull();
  });

  it('人口構成データを取得し、フォーマットする', async () => {
    const result = await PopulationGraphContainer({
      checkedPrefectures: mockCheckedPrefectures,
    });
    render(result);

    expect(fetchPopulationCompositionPerYear).toHaveBeenCalledTimes(
      mockCheckedPrefectures.length,
    );

    expect(formatPopulationComposition).toHaveBeenCalledTimes(1);
    expect(formatPopulationComposition).toHaveBeenCalledWith([
      {
        prefCode: 1,
        prefName: '北海道',
        boundaryYear: 2020,
        data: [
          {
            label: '総人口',
            data: [
              { year: 1960, value: 6000000 },
              { year: 1970, value: 6500000 },
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
              { year: 1960, value: 6000000 },
              { year: 1970, value: 6500000 },
            ],
          },
        ],
      },
    ]);

    expect(PopulationGraphPresenter).toHaveBeenCalledTimes(1);
  });
});
