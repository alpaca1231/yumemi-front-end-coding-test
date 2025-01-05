import type { Meta, StoryObj } from '@storybook/react';

import { PrefectureSkeletonList } from './PrefectureSkeletonList';

const meta = {
  title: 'Routes/PrefectureSkeletonList',
  component: PrefectureSkeletonList,
  tags: ['autodocs'],
} satisfies Meta<typeof PrefectureSkeletonList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
