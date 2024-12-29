import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'srcAppComponentsElementsButton/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    valiant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'outline', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    valiant: 'default',
    size: 'medium',
    disabled: false,
  },
  render: (args) => <Button {...args}>Button</Button>,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    valiant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    valiant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    valiant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    valiant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    valiant: 'link',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
