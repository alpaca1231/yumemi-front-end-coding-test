import type { Meta, StoryObj } from '@storybook/react';

import { GraphSkeleton } from './GraphSkeleton';

const meta = {
  title: 'Routes/GraphSkeleton',
  component: GraphSkeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof GraphSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
