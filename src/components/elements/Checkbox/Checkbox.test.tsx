import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Checkbox } from './Checkbox';

describe('Checkbox component', () => {
  const defaultProps = {
    id: 'checkbox-id',
    label: 'checkbox',
    checked: false,
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('正しいlabelで表示される', () => {
    render(<Checkbox {...defaultProps} />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText('checkbox')).toBeInTheDocument();
  });

  it('クリックされたときに onChange が呼び出される', async () => {
    render(<Checkbox {...defaultProps} />);
    const checkbox = screen.getByRole('checkbox');

    await userEvent.click(checkbox);
    expect(defaultProps.onChange).toHaveBeenCalledWith(true);
  });

  it('disabled が適用される', () => {
    render(<Checkbox {...defaultProps} disabled />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
    userEvent.click(checkbox);
    expect(defaultProps.onChange).not.toHaveBeenCalled();
  });

  it('checked が適用される', () => {
    render(<Checkbox {...defaultProps} checked />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });
});
