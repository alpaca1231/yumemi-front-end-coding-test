import { renderHook, act } from '@testing-library/react';

import { usePrefectureQuerySync } from './usePrefectureQuerySync';

const mockRouterPush = jest.fn();
const mockSearchParams = new URLSearchParams();

jest.mock('next/navigation', () => {
  const originalModule = jest.requireActual('next/navigation');
  return {
    __esModule: true,
    ...originalModule,
    useRouter: jest.fn().mockImplementation(() => ({
      push: mockRouterPush,
    })),
    useSearchParams: jest.fn().mockImplementation(() => mockSearchParams),
  };
});

describe('usePrefectureQuerySync', () => {
  const mockPrefectures = [
    { prefCode: 1, prefName: '北海道' },
    { prefCode: 2, prefName: '青森県' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('チェックを追加するとsearchParamsが追加される', () => {
    const mockCheckedPrefectures = [{ prefCode: 1, prefName: '北海道' }];
    const { result } = renderHook(() =>
      usePrefectureQuerySync(mockPrefectures, mockCheckedPrefectures),
    );
    act(() => {
      result.current.handleOnChange(2, true);
    });
    expect(mockRouterPush).toHaveBeenCalledTimes(1);
    expect(mockRouterPush).toHaveBeenCalledWith('/?pref=1&pref=2');
  });

  it('チェックを外すとsearchParamsが削除される', () => {
    const mockCheckedPrefectures = [
      { prefCode: 1, prefName: '北海道' },
      { prefCode: 2, prefName: '青森県' },
    ];
    const { result } = renderHook(() =>
      usePrefectureQuerySync(mockPrefectures, mockCheckedPrefectures),
    );
    act(() => {
      result.current.handleOnChange(1, false);
    });
    expect(mockRouterPush).toHaveBeenCalledTimes(1);
    expect(mockRouterPush).toHaveBeenCalledWith('/?pref=2');
  });

  it('対応する都道府県が存在しない場合は何もしない', () => {
    const mockCheckedPrefectures = [{ prefCode: 1, prefName: '北海道' }];
    const { result } = renderHook(() =>
      usePrefectureQuerySync(mockPrefectures, mockCheckedPrefectures),
    );
    act(() => {
      result.current.handleOnChange(99, true);
    });
    expect(mockRouterPush).not.toHaveBeenCalled();
  });
});
