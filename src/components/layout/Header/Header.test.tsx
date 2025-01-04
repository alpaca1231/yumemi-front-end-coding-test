import { render, screen } from '@testing-library/react';

import { Header } from './Header';

describe('Header component', () => {
  it('正しくレンダリングされること', () => {
    render(<Header />);
    const element = screen.getByRole('banner');
    expect(element).toBeInTheDocument();
  });

  it('正しいタイトルが表示されること', () => {
    render(<Header />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent('都道府県別の総人口推移グラフ');
  });
});
