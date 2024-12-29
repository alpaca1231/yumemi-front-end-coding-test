import type { ChangeEvent, FC, InputHTMLAttributes } from 'react';

import clsx from 'clsx';
import { Check } from 'lucide-react';

import styles from './checkbox.module.css';

interface CheckboxProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'id' | 'type' | 'checked' | 'onChange'
  > {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox: FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  disabled = false,
  ...rest
}) => {
  return (
    <label
      className={clsx(styles.container, { [styles.disabled]: disabled })}
      htmlFor={id}
    >
      <input
        aria-checked={checked}
        aria-disabled={disabled}
        checked={checked}
        className={clsx(styles.hidden)}
        disabled={disabled}
        id={id}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.checked)
        }
        type="checkbox"
        {...rest}
      />
      <div
        className={clsx(styles.customCheckbox, {
          [styles.checked]: checked,
          [styles.disabled]: disabled,
        })}
      >
        {checked && <Check className={styles.check} />}
      </div>
      <span className={styles.label}>{label}</span>
    </label>
  );
};
