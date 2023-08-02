import { ButtonHTMLAttributes, FC, ReactNode, useMemo } from 'react';
import cls from './IconButton.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

type IconButtonVariant = 'ghost' | 'filled' | 'transparent';
type IconButtonSize = '16' | '24' | '32' | '40';

interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
  circle?: boolean;
  active?: boolean;
  link?: string;
  children: ReactNode;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
}

const mapSizeToClass: Record<IconButtonSize, string> = {
  '16': 'size_16',
  '24': 'size_24',
  '32': 'size_32',
  '40': 'size_40',
};

export const IconButton: FC<IIconButtonProps> = props => {
  const {
    className,
    children,
    text,
    circle,
    active,
    link,
    variant = 'ghost',
    size = '24',
    ...otherProps
  } = props;

  const currentChildren = useMemo(
    () =>
      link ? (
        <a href={link} target='_blank' rel='noreferrer'>
          {children}
        </a>
      ) : (
        children
      ),
    [children, link],
  );

  const classNameIconButton = useMemo(
    () =>
      classNames(
        cls.iconButton,
        {
          [cls.circle]: circle,
          [cls.active]: active,
        },
        [className, cls[variant], cls[mapSizeToClass[size]]],
      ),
    [active, circle, className, size, variant],
  );

  return (
    <button type='button' className={classNameIconButton} {...otherProps}>
      {currentChildren}
      {!!text && <p>{text}</p>}
    </button>
  );
};
