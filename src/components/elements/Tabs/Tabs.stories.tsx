import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      {
        id: 'tab1',
        label: 'Tab 1',
        content: 'Tab 1 content',
      },
      {
        id: 'tab2',
        label: 'Tab 2',
        content: 'Tab 2 content',
      },
      {
        id: 'tab3',
        label: 'Tab 3',
        content: 'Tab 3 content',
      },
    ],
  },
};

export const SingleTab: Story = {
  args: {
    tabs: [
      {
        id: 'tab1',
        label: 'Tab 1',
        content: 'Tab 1 content',
      },
    ],
  },
};

export const LongLabels: Story = {
  args: {
    tabs: [
      {
        id: 'tab1',
        label: 'Tab 1 with a long label',
        content: 'Tab 1 content',
      },
      {
        id: 'tab2',
        label: 'Tab 2 with a long label',
        content: 'Tab 2 content',
      },
      {
        id: 'tab3',
        label: 'Tab 3 with a long label',
        content: 'Tab 3 content',
      },
    ],
  },
};

export const ManyTabs: Story = {
  args: {
    tabs: Array.from({ length: 10 }, (_, index) => ({
      id: `tab${index + 1}`,
      label: `Tab ${index + 1}`,
      content: `Tab ${index + 1} content`,
    })),
  },
};
