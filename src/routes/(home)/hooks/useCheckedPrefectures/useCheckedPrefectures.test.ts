import { renderHook, act } from '@testing-library/react';

import { useCheckedPrefectures } from './useCheckedPrefectures';

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

describe('useCheckedPrefectures', () => {
  const mockPrefectures = [
    { prefCode: 1, prefName: '北海道' },
    { prefCode: 2, prefName: '青森県' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('checkedPrefectures: searchParamsが空の場合は空配列を返す', () => {
    const { result } = renderHook(() => useCheckedPrefectures(mockPrefectures));
    expect(result.current.checkedPrefectures).toEqual([]);
  });

  it('checkedPrefectures: searchParamsに1つの値を追加すると対応する都道府県がセットされる', () => {
    mockSearchParams.set('pref', '1');
    const { result } = renderHook(() => useCheckedPrefectures(mockPrefectures));
    expect(result.current.checkedPrefectures).toEqual([
      { prefCode: 1, prefName: '北海道' },
    ]);
  });

  it('checkedPrefectures: searchParamsに複数の値を追加すると対応する都道府県がセットされる', () => {
    mockSearchParams.set('pref', '1');
    mockSearchParams.append('pref', '2');
    const { result } = renderHook(() => useCheckedPrefectures(mockPrefectures));
    expect(result.current.checkedPrefectures).toEqual([
      { prefCode: 1, prefName: '北海道' },
      { prefCode: 2, prefName: '青森県' },
    ]);
  });

  it('checkedPrefectures: searchParamsから値を削除すると対応する都道府県を取り除く', () => {
    mockSearchParams.set('pref', '1');
    mockSearchParams.delete('pref', '1');
    const { result } = renderHook(() => useCheckedPrefectures(mockPrefectures));
    expect(result.current.checkedPrefectures).toEqual([]);
  });

  it('checkedPrefectures: searchParamsに存在しないprefCodeを追加しても変化しない', () => {
    mockSearchParams.set('pref', '1');
    mockSearchParams.append('pref', '99');
    const { result } = renderHook(() => useCheckedPrefectures(mockPrefectures));
    expect(result.current.checkedPrefectures).toEqual([
      { prefCode: 1, prefName: '北海道' },
    ]);
  });

  it('checkedPrefectures: searchParamsに不正な値を追加しても変化しない', () => {
    mockSearchParams.set('pref', 'invalid');
    const { result } = renderHook(() => useCheckedPrefectures(mockPrefectures));
    expect(result.current.checkedPrefectures).toEqual([]);
  });

  it('handleOnChange: チェックを追加するとsearchParamsが追加される', () => {
    mockSearchParams.set('pref', '1');
    const { result } = renderHook(() => useCheckedPrefectures(mockPrefectures));
    act(() => {
      result.current.handleOnChange(2, true);
    });
    expect(mockRouterPush).toHaveBeenCalledTimes(1);
    expect(mockRouterPush).toHaveBeenCalledWith('/?pref=1&pref=2');
  });

  it('handleOnChange: チェックを外すとsearchParamsが削除される', () => {
    mockSearchParams.set('pref', '1');
    mockSearchParams.append('pref', '2');
    const { result } = renderHook(() => useCheckedPrefectures(mockPrefectures));
    act(() => {
      result.current.handleOnChange(1, false);
    });
    expect(mockRouterPush).toHaveBeenCalledTimes(1);
    expect(mockRouterPush).toHaveBeenCalledWith('/?pref=2');
  });

  it('handleOnChange: 対応する都道府県が存在しない場合は何もしない', () => {
    const { result } = renderHook(() => useCheckedPrefectures(mockPrefectures));
    act(() => {
      result.current.handleOnChange(99, true);
    });
    expect(mockRouterPush).not.toHaveBeenCalled();
  });
});
