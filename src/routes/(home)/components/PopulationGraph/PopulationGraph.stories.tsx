import type { Meta, StoryObj } from '@storybook/react';

import { PopulationGraphPresenter } from './PopulationGraphPresenter';

const meta = {
  title: 'Components/PopulationGraph',
  component: PopulationGraphPresenter,
  tags: ['autodocs'],
  args: {
    data: [
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
    ],
    prefectures: [
      {
        prefCode: 1,
        prefName: '北海道',
      },
      {
        prefCode: 2,
        prefName: '青森県',
      },
    ],
  },
} satisfies Meta<typeof PopulationGraphPresenter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
