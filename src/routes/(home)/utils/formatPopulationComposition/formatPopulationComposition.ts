import type { PopulationCompositionPerYear } from '@/api/population/composition/perYear/types';
import type { Prefecture } from '@/api/prefectures/types';

type PopulationEntry =
  PopulationCompositionPerYear['data'][number]['data'][number];

type PrefecturalPopulationCompositionPerYear = Prefecture &
  PopulationCompositionPerYear;

type PopulationPerPrefecture = Record<Prefecture['prefName'], number>;

type YearlyPopulationCompositionPerPrefecture = {
  year: PopulationEntry['year'];
  populationPerPrefecture: PopulationPerPrefecture;
};

export type FormattedCategorizedData = {
  label: PopulationCompositionPerYear['data'][number]['label'];
  data: YearlyPopulationCompositionPerPrefecture[];
};

type CategoryLabel = '総人口' | '年少人口' | '生産年齢人口' | '老年人口';

const extractCategoryData = (
  categoryLabel: CategoryLabel,
  data: PrefecturalPopulationCompositionPerYear[],
): FormattedCategorizedData => ({
  label: categoryLabel,
  data: extractYearData(categoryLabel, data),
});

const extractYearData = (
  categoryLabel: CategoryLabel,
  data: PrefecturalPopulationCompositionPerYear[],
): YearlyPopulationCompositionPerPrefecture[] => {
  // 最初の都道府県から全ての年を抽出
  const years =
    data[0].data
      .find((d) => d.label === categoryLabel)
      ?.data.map((entry) => entry.year) || [];

  // 各年ごとの都道府県データを構築
  return years.map((year) => ({
    year,
    populationPerPrefecture: extractPrefectureData(categoryLabel, year, data),
  }));
};

const extractPrefectureData = (
  categoryLabel: CategoryLabel,
  year: PopulationEntry['year'],
  data: PrefecturalPopulationCompositionPerYear[],
): PopulationPerPrefecture => {
  return data.reduce((acc, prefectureData) => {
    const population = prefectureData.data
      .find((d) => d.label === categoryLabel)
      ?.data.find((d) => d.year === year)?.value;
    if (population === undefined) {
      throw new Error('Population data is missing');
    }
    return { ...acc, [prefectureData.prefName]: population };
  }, {} as PopulationPerPrefecture);
};

export const formatPopulationComposition = (
  data: PrefecturalPopulationCompositionPerYear[],
): FormattedCategorizedData[] => {
  if (data.length === 0) {
    return [];
  }
  const categories = data[0].data.map((d) => d.label);
  return categories.map((category) =>
    extractCategoryData(category as CategoryLabel, data),
  );
};
