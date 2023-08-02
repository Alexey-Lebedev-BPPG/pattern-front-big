import { ButtonHTMLAttributes, FC, ReactNode, memo } from 'react';
import cls from './addButton.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ICustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
  fullWidth?: boolean;
  img?: ReactNode;
  imgLocation?: 'right' | 'left';
}

export const AddButton: FC<ICustomButtonProps> = memo(props => {
  const {
    text = '',
    img,
    className,
    fullWidth,
    imgLocation = 'left',
    ...otherProps
  } = props;

  const mods = {
    [cls.fullWidth]: fullWidth,
    [cls[imgLocation]]: true,
  };

  return (
    <button
      type='button'
      className={classNames(cls['add-button'], mods, [className])}
      {...otherProps}
    >
      {!!img && img}
      <p>{!!text && text}</p>
    </button>
  );
});
