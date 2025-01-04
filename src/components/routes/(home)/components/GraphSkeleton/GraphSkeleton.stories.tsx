import type { Meta, StoryObj } from '@storybook/react';

import { GraphSkeleton } from './GraphSkeleton';

const meta = {
  title: 'Components/GraphSkeleton',
  component: GraphSkeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof GraphSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
