import type { ComponentProps } from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PrefectureListPresenter } from './PrefectureListPresenter';

describe('PrefectureListPresenter component', () => {
  const prefectures = [
    { prefCode: 1, prefName: '北海道' },
    { prefCode: 2, prefName: '青森県' },
  ];
  const checkedPrefectures = [{ prefCode: 1, prefName: '北海道' }];
  const onChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const defaultProps = {
    prefectures,
    checkedPrefectures,
    onChange,
  };

  const renderComponent = (
    props: ComponentProps<typeof PrefectureListPresenter> = defaultProps,
  ) => {
    const mergedProps = { ...defaultProps, ...props };
    render(<PrefectureListPresenter {...mergedProps} />);
  };

  it('都道府県リストが表示されている', () => {
    renderComponent();

    prefectures.forEach((prefecture) => {
      expect(
        screen.getByRole('checkbox', { name: prefecture.prefName }),
      ).toBeInTheDocument();
    });
  });

  it('チェックボックスの状態が正しく反映されている', () => {
    renderComponent();

    expect(screen.getByRole('checkbox', { name: '北海道' })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: '青森県' })).not.toBeChecked();
  });

  it('onChangeが呼ばれるとhandleOnChangeが呼ばれる', async () => {
    renderComponent();

    const checkbox = screen.getByRole('checkbox', { name: '北海道' });
    await userEvent.click(checkbox);

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
