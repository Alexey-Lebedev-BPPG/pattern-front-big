import { FC, memo } from 'react';
import cls from './Overlay.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface IOverlayProps {
  className?: string;
  onClick?: () => void;
  blur?: boolean;
}

export const Overlay: FC<IOverlayProps> = memo(
  ({ className, onClick, blur }) => (
    <div
      className={classNames(cls.overlay, { [cls.blur]: blur }, [className])}
      onClick={onClick}
    />
  ),
);
