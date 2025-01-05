export const getColorByIndex = (index: number): string => {
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
  return colors[index % colors.length];
};
