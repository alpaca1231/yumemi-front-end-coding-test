import { render, screen } from '@testing-library/react';

import { Footer } from './Footer';

describe('Footer component', () => {
  it('正しくレンダリングされること', () => {
    render(<Footer />);
    const element = screen.getByRole('contentinfo');
    expect(element).toBeInTheDocument();
  });

  it('著作権のテキストが表示されていることを確認する', () => {
    render(<Footer />);
    const copyrightText = screen.getByText(
      /Copyright © 2025 - All rights reserved/i,
    );
    expect(copyrightText).toBeInTheDocument();
  });
});
