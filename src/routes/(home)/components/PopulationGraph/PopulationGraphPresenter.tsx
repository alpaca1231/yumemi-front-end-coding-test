'use client';

import type { FC } from 'react';

import clsx from 'clsx';
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import type { Prefecture } from '@/api/prefectures/types';
import { Tabs } from '@/components/elements/Tabs';
import type { FormattedCategorizedData } from '@/routes/(home)/utils/formatPopulationComposition';
import { getColorByIndex } from '@/routes/(home)/utils/getColorByIndex';

import styles from './populationGraph.module.css';

type PopulationGraphPresenterProps = {
  prefectures: Prefecture[];
  data: FormattedCategorizedData[];
  className?: string;
};

export const PopulationGraphPresenter: FC<PopulationGraphPresenterProps> = ({
  prefectures,
  data,
  className,
}) => {
  const tabs = data.map((d) => ({
    id: d.label,
    label: d.label,
    content: (
      <ResponsiveContainer height={400} width="100%">
        <LineChart
          data={d.data}
          height={250}
          margin={{ top: 10, right: 30, left: 20, bottom: 30 }}
          width={730}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="year">
            <Label position="bottom" value="年度（年）" />
          </XAxis>

          <YAxis
            tickFormatter={(value) =>
              new Intl.NumberFormat().format(Number(value) / 10_000)
            }
          >
            <Label angle={-90} position="insideLeft" value="人口（万人）" />
          </YAxis>

          <Tooltip />

          <Legend verticalAlign="top" />

          {prefectures.map((prefecture: Prefecture, index) => {
            return (
              <Line
                dataKey={`populationPerPrefecture.${prefecture.prefName}`}
                key={prefecture.prefCode}
                name={prefecture.prefName}
                stroke={getColorByIndex(index)}
                type="monotone"
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    ),
  }));

  return (
    <div className={clsx(styles.wrapper, className)}>
      <Tabs className={className} tabs={tabs} />
    </div>
  );
};
