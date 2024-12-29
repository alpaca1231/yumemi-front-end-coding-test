import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    label: 'checkbox',
    checked: false,
    disabled: false,
  },
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();
    const onChange = () => {
      updateArgs({ checked: !checked });
    };
    return <Checkbox {...args} checked={checked} onChange={onChange} />;
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    id: 'checkbox-id',
    onChange: () => {},
  },
};
