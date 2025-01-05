import { render, screen } from '@testing-library/react';

import { usePrefectureQuerySync } from '@/routes/(home)/hooks/usePrefectureQuerySync';

import { PrefectureListContainer } from './PrefectureListContainer';

jest.mock('@/routes/(home)/hooks/usePrefectureQuerySync', () => ({
  usePrefectureQuerySync: jest.fn().mockReturnValue({
    handleOnChange: jest.fn(),
  }),
}));

describe('PrefectureListContainer component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Presenter componentに正しくpropsが渡されている', () => {
    const mockPrefectures = [
      { prefCode: 1, prefName: '北海道' },
      { prefCode: 2, prefName: '青森県' },
    ];
    const mockCheckedPrefectures = [{ prefCode: 1, prefName: '北海道' }];

    render(
      <PrefectureListContainer
        checkedPrefectures={mockCheckedPrefectures}
        prefectures={mockPrefectures}
      />,
    );

    expect(usePrefectureQuerySync).toHaveBeenCalledTimes(1);
    expect(usePrefectureQuerySync).toHaveBeenCalledWith(
      mockPrefectures,
      mockCheckedPrefectures,
    );

    expect(screen.getByRole('checkbox', { name: '北海道' })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: '青森県' })).not.toBeChecked();
  });
});
