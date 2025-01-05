import { Suspense } from 'react';

import { fetchPrefectures } from '@/api/prefectures/services';
import { PrefectureList } from '@/routes/(home)/components/PrefectureList';
import { PrefectureSkeletonList } from '@/routes/(home)/components/PrefectureSkeleton';

import styles from './page.module.css';

// type HomeProps = {
//   searchParams: Promise<{
//     pref?: string | string[];
//   }>;
// };

export default async function Home() {
  const prefectures = await fetchPrefectures();
  return (
    <div className={styles.wrapper}>
      <Suspense fallback={<PrefectureSkeletonList />}>
        <PrefectureList prefectures={prefectures} />
      </Suspense>
    </div>
  );
}
