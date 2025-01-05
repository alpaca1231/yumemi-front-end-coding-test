import { Suspense } from 'react';

import { fetchPrefectures } from '@/api/prefectures/services';
import { GraphSkeleton } from '@/routes/(home)/components/GraphSkeleton';
import { PopulationGraph } from '@/routes/(home)/components/PopulationGraph';
import { PrefectureList } from '@/routes/(home)/components/PrefectureList';
import { PrefectureSkeletonList } from '@/routes/(home)/components/PrefectureSkeleton';
import { getCheckedPrefectures } from '@/routes/(home)/utils/getCheckedPrefectures';

import styles from './page.module.css';

type HomeProps = {
  searchParams: Promise<{
    pref?: string | string[];
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { pref } = await searchParams;
  const prefectures = await fetchPrefectures();
  const checkedPrefectures = getCheckedPrefectures(prefectures, pref);

  return (
    <div className={styles.wrapper}>
      <Suspense fallback={<PrefectureSkeletonList />}>
        <PrefectureList
          checkedPrefectures={checkedPrefectures}
          prefectures={prefectures}
        />
      </Suspense>
      <div className={styles.graphContainer}>
        <Suspense fallback={<GraphSkeleton />}>
          {checkedPrefectures.length === 0 ? (
            <p className={styles.noData}>都道府県を選択してください</p>
          ) : (
            <PopulationGraph checkedPrefectures={checkedPrefectures} />
          )}
        </Suspense>
      </div>
    </div>
  );
}
