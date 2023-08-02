import { InputHTMLAttributes, memo } from 'react';
import cls from './RadioButton.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'onChange' | 'readOnly'
>;
export interface RadioButtonProps extends HTMLInputProps {
  className?: string;
  name?: string;
  id?: string;
  value?: string;
  onChange: () => void;
  checked: boolean;
  text?: string;
}
export const RadioButton = memo((props: RadioButtonProps) => {
  const { className, checked, id, name, onChange, text, value, ...otherProps } =
    props;

  return (
    <div className={classNames(cls.RadioButton, {}, [className])}>
      <label htmlFor={id} className={cls.radioLabel}>
        <input
          className={cls.radioInput}
          type='radio'
          name={name}
          id={id}
          checked={checked}
          onChange={onChange}
          {...otherProps}
        />
        <span className={cls.customRadio} />
      </label>
    </div>
  );
});
