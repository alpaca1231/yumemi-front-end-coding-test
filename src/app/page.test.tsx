import { render, screen } from '@testing-library/react';

import Home from './page';

describe('Home', () => {
  it('Next.jsのロゴが表示されている', () => {
    render(<Home />);

    expect(screen.getByAltText('Next.js logo')).toBeInTheDocument();
  });
});
