import {
  ChangeEvent,
  Dispatch,
  FC,
  InputHTMLAttributes,
  SetStateAction,
  memo,
} from 'react';
import cls from './Switch.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'>;

interface ISwitchProps extends HTMLInputProps {
  text: string;
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
}

export const SwitchButton: FC<ISwitchProps> = memo(props => {
  const { text, value, id, setValue, onChange, ...otherProps } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
    setValue(!value);
  };

  return (
    <div className={cls.switchWrapper}>
      <label htmlFor={`switch-button-${id}`} className={cls.switch}>
        <input
          checked={value}
          id={`switch-button-${id}`}
          type='checkbox'
          onChange={handleChange}
          {...otherProps}
        />
        <span className={classNames(cls.slider, {}, [cls.round])} />
      </label>
      <span className={cls.title}>{text}</span>
    </div>
  );
});
