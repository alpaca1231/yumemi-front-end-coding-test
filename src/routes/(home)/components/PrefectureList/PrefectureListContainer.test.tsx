import { render, screen } from '@testing-library/react';

import { useCheckedPrefectures } from '@/routes/(home)/hooks/useCheckedPrefectures/useCheckedPrefectures';

import { PrefectureListContainer } from './PrefectureListContainer';

jest.mock(
  '@/routes/(home)/hooks/useCheckedPrefectures/useCheckedPrefectures',
  () => ({
    useCheckedPrefectures: jest.fn().mockReturnValue({
      checkedPrefectures: [{ prefCode: 1, prefName: '北海道' }],
      handleOnChange: jest.fn(),
    }),
  }),
);

describe('PrefectureListContainer component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Presenter componentに正しくpropsが渡されている', () => {
    const prefectures = [
      { prefCode: 1, prefName: '北海道' },
      { prefCode: 2, prefName: '青森県' },
    ];
    render(<PrefectureListContainer prefectures={prefectures} />);

    expect(useCheckedPrefectures).toHaveBeenCalledTimes(1);
    expect(useCheckedPrefectures).toHaveBeenCalledWith(prefectures);

    expect(screen.getByRole('checkbox', { name: '北海道' })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: '青森県' })).not.toBeChecked();
  });
});
