import type { ButtonHTMLAttributes, FC } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import styles from './button.module.css';

const buttonVariants = cva(styles.base, {
  variants: {
    valiant: {
      default: styles.default,
      primary: styles.primary,
      secondary: styles.secondary,
      outline: styles.outline,
      ghost: styles.ghost,
      link: styles.link,
    },
    size: {
      small: styles.small,
      medium: styles.medium,
      large: styles.large,
      icon: styles.icon,
    },
    disabled: {
      false: styles.enabled,
      true: styles.disabled,
    },
  },
  defaultVariants: {
    valiant: 'default',
    size: 'medium',
    disabled: false,
  },
});

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof buttonVariants> {}

export const Button: FC<ButtonProps> = ({
  className,
  valiant,
  size,
  disabled,
  ...props
}) => (
  <button
    className={buttonVariants({ valiant, size, disabled, className })}
    disabled={disabled || undefined}
    {...props}
  />
);
