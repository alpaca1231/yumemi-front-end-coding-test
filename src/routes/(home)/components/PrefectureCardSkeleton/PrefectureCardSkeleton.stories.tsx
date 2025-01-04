import type { Meta, StoryObj } from '@storybook/react';

import { PrefectureCardSkeleton } from './PrefectureCardSkeleton';

const meta = {
  title: 'Routes/PrefectureCardSkeleton',
  component: PrefectureCardSkeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof PrefectureCardSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
