import { InputHTMLAttributes, memo, ReactNode } from 'react';
import cls from './Checkbox.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'onChange'
>;

export interface CheckboxProps extends HTMLInputProps {
  className?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: string | ReactNode;
  error?: boolean;
  id: string;
}

export const Checkbox = memo((props: CheckboxProps) => {
  const {
    className,
    checked,
    onChange,
    children,
    id,
    error = false,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <div className={classNames(cls.checkbox, {}, [className])}>
      <input
        type='checkbox'
        id={`checkbox-${id}`}
        checked={checked}
        aria-invalid={error}
        onChange={onChangeHandler}
        {...otherProps}
      />
      <label htmlFor={`checkbox-${id}`}>{children}</label>
    </div>
  );
});
