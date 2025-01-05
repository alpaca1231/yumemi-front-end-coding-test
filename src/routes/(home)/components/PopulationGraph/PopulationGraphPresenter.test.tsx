import type { ReactNode } from 'react';
import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { Prefecture } from '@/api/prefectures/types';
import type { FormattedCategorizedData } from '@/routes/(home)/utils/formatPopulationComposition';

import { PopulationGraphPresenter } from './PopulationGraphPresenter';

window.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
}));

jest.mock('recharts', () => {
  const OriginalModule = jest.requireActual('recharts');
  return {
    ...OriginalModule,
    ResponsiveContainer: ({ children }: { children: ReactNode }) => (
      <OriginalModule.ResponsiveContainer height={400} width="100%">
        {children}
      </OriginalModule.ResponsiveContainer>
    ),
  };
});

describe('PopulationGraphPresenter component', () => {
  const mockPrefectures: Prefecture[] = [
    { prefCode: 1, prefName: '北海道' },
    { prefCode: 2, prefName: '青森県' },
  ];

  const mockData: FormattedCategorizedData[] = [
    {
      label: '総人口',
      data: [
        {
          year: 2000,
          populationPerPrefecture: { 北海道: 1000000, 青森県: 500000 },
        },
        {
          year: 2005,
          populationPerPrefecture: { 北海道: 1100000, 青森県: 550000 },
        },
      ],
    },
    {
      label: '年少人口',
      data: [
        {
          year: 2000,
          populationPerPrefecture: { 北海道: 300000, 青森県: 150000 },
        },
        {
          year: 2005,
          populationPerPrefecture: { 北海道: 330000, 青森県: 165000 },
        },
      ],
    },
  ];

  it('タブが正しくレンダリングされること', () => {
    render(
      <PopulationGraphPresenter
        data={mockData}
        prefectures={mockPrefectures}
      />,
    );

    expect(screen.getByRole('tab', { name: '総人口' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: '年少人口' })).toBeInTheDocument();
  });

  it('タブをクリックしたときに正しいデータが表示されること', async () => {
    render(
      <PopulationGraphPresenter
        data={mockData}
        prefectures={mockPrefectures}
      />,
    );

    await userEvent.click(screen.getByRole('tab', { name: '総人口' }));
    expect(
      screen.getByRole('tabpanel', { name: '総人口' }),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByRole('tab', { name: '年少人口' }));
    expect(
      screen.getByRole('tabpanel', { name: '年少人口' }),
    ).toBeInTheDocument();
  });
});
