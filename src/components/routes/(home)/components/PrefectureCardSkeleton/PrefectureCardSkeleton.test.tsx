import { render, screen } from '@testing-library/react';

import { PrefectureCardSkeleton } from '@/components/routes/(home)/components/PrefectureCardSkeleton/PrefectureCardSkeleton';

describe('PrefectureCardSkeleton component', () => {
  it('正しくレンダリングされる', () => {
    render(<PrefectureCardSkeleton />);
    const prefectureCardSkeleton = screen.getByRole('status');
    expect(prefectureCardSkeleton).toBeInTheDocument();
  });
});
