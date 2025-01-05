import { getColorByIndex } from '@/routes/(home)/utils/getColorByIndex';
describe('getColorByIndex', () => {
  it('指定されたインデックスに対応する色を返すこと', () => {
    expect(getColorByIndex(0)).toBe('#F87171');
    expect(getColorByIndex(1)).toBe('#38BDF8');
    expect(getColorByIndex(2)).toBe('#84CC16');
  });

  it('配列の長さを超えるインデックスの場合、循環して色を返すこと', () => {
    const colors = [
      '#F87171',
      '#38BDF8',
      '#84CC16',
      '#F59E0B',
      '#A78BFA',
      '#60A5FA',
      '#10B981',
      '#E879F9',
      '#22C55E',
      '#FB923C',
      '#06B6D4',
      '#F472B6',
      '#8B5CF6',
      '#6366F1',
      '#14B8A6',
      '#FACC15',
      '#FB7185',
      '#71717A',
    ];
    const length = colors.length;

    expect(getColorByIndex(length)).toBe(colors[0]);
    expect(getColorByIndex(length + 1)).toBe(colors[1]);
    expect(getColorByIndex(length * 2)).toBe(colors[0]);
  });
});
