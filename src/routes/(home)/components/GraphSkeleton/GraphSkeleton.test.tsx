import { render, screen } from '@testing-library/react';

import { GraphSkeleton } from './GraphSkeleton';

describe('GraphSkeleton component', () => {
  it('正しくレンダリングされる', () => {
    render(<GraphSkeleton />);
    const graphSkeleton = screen.getByRole('status');
    expect(graphSkeleton).toBeInTheDocument();
  });
});
