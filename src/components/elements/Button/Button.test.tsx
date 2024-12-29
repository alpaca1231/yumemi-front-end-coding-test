import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';

describe('Buttonコンポーネント', () => {
  it('propsを指定しない場合はdefaultスタイルが適用されたボタンが表示される', () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByRole('button', { name: /default button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('default');
    expect(button).toHaveClass('medium');
  });

  it('primaryとlargeを指定した場合、正しいスタイルが適用されたボタンが表示される', () => {
    render(
      <Button size="large" valiant="primary">
        Primary Button
      </Button>,
    );
    const button = screen.getByRole('button', { name: /primary button/i });
    expect(button).toHaveClass('primary');
    expect(button).toHaveClass('large');
  });

  it('disabledがtrueの場合、ボタンを無効化する', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button', { name: /disabled button/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled');
  });

  it('ボタンをクリックしたときにonClickハンドラーが呼び出される', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    const button = screen.getByRole('button', { name: /clickable button/i });
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('カスタムクラス名が正しく適用される', () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const button = screen.getByRole('button', { name: /custom button/i });
    expect(button).toHaveClass('custom-class');
  });
});
