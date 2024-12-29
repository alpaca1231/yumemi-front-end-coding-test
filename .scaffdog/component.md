---
name: 'component'
root: 'src'
output: '**/*'
ignore: []
questions:
  name:
    message: 'Component name (e.g., Button):'
    initial: 'Button'
---

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```tsx
import type { FC } from 'react';

import { clsx } from 'clsx';

import styles from './{{ inputs.name | camel }}.module.css';

type {{ inputs.name | pascal }}Props = {
  className?: string;
};

export const {{ inputs.name | pascal }}: FC<{{ inputs.name | pascal }}Props> = ({ className }) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      {/* Add your component here */}
    </div>
  );
};
```

# `{{ inputs.name | pascal }}/index.ts`

```tsx
export * from './{{ inputs.name | pascal }}';
```

# `{{ inputs.name | pascal }}/{{ inputs.name | camel }}.module.css`

```css
.wrapper {
  /* Add styles here */
}
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```tsx
import type { Meta, StoryObj } from '@storybook/react';

import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';

const meta = {
  title: 'Components/{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // argTypes: {
  // },
  // args: {
  // },
} satisfies Meta<typeof {{ inputs.name | pascal }}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // args: {
  // },
};
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.test.tsx`

```tsx
import type { ComponentProps } from 'react';

import { render, screen } from '@testing-library/react';

import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';

describe('{{ inputs.name | pascal }} component', () => {
  const defaultProps = {
    // Add default props here
  };

  const renderComponent = (props: ComponentProps<typeof {{ inputs.name | pascal }}> = {}) => {
    const mergedProps = { ...defaultProps, ...props };
    render(<{{ inputs.name | pascal }} {...mergedProps} />);
  };

  it('renders the component without crashing', () => {
    renderComponent();
    const element = screen.getByRole(''); // Add role here
    expect(element).toBeInTheDocument();
  });
});
```
