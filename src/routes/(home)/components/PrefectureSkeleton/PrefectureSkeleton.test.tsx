import { render, screen } from '@testing-library/react';

import { PrefectureSkeleton } from '@/routes/(home)/components/PrefectureSkeleton/PrefectureSkeleton';
import { PrefectureSkeletonList } from '@/routes/(home)/components/PrefectureSkeleton/PrefectureSkeletonList';

describe('PrefectureSkeleton', () => {
  it('PrefectureSkeleton: 正しくレンダリングされる', () => {
    render(<PrefectureSkeleton />);
    const prefectureSkeleton = screen.getByRole('status');
    expect(prefectureSkeleton).toBeInTheDocument();
  });

  it('PrefectureSkeletonList: 正しくレンダリングされる', () => {
    render(<PrefectureSkeletonList />);

    const prefectureSkeletons = screen.getAllByRole('status');
    expect(prefectureSkeletons).toHaveLength(10);
  });
});
