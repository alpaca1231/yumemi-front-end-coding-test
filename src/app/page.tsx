import { Suspense } from 'react';

import { fetchPrefectures } from '@/api/prefectures/services';
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
      <PopulationGraph checkedPrefectures={checkedPrefectures} />
    </div>
  );
}
