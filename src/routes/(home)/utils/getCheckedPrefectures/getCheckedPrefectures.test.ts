import { getCheckedPrefectures } from './getCheckedPrefectures';

describe('getCheckedPrefectures', () => {
  const mockPrefectures = [
    { prefCode: 1, prefName: '北海道' },
    { prefCode: 2, prefName: '青森県' },
  ];

  it('prefがundefinedの場合は空配列を返す', () => {
    expect(getCheckedPrefectures(mockPrefectures)).toEqual([]);
  });

  it('prefに文字列の値を渡すと対応するprefCodeの都道府県を返す', () => {
    expect(getCheckedPrefectures(mockPrefectures, '1')).toEqual([
      { prefCode: 1, prefName: '北海道' },
    ]);
  });

  it('prefに配列の値を渡すと対応するprefCodeの都道府県を返す', () => {
    expect(getCheckedPrefectures(mockPrefectures, ['1', '2'])).toEqual([
      { prefCode: 1, prefName: '北海道' },
      { prefCode: 2, prefName: '青森県' },
    ]);
  });

  it('prefに存在しない値を渡しても存在するprefCodeの都道府県のみ返す', () => {
    expect(getCheckedPrefectures(mockPrefectures, ['1', '99'])).toEqual([
      { prefCode: 1, prefName: '北海道' },
    ]);
  });

  it('prefに不正な値を渡しても存在するprefCodeの都道府県のみ返す', () => {
    expect(getCheckedPrefectures(mockPrefectures, ['1', 'invalid'])).toEqual([
      { prefCode: 1, prefName: '北海道' },
    ]);
  });
});
