import { HTMLAttributes, ReactNode, forwardRef } from 'react';
import cls from './CardUi.module.scss';
import { classNames } from '../../lib/classNames/classNames';
import { typedMemo } from '@/shared/types/TypedMemo';

export interface CardUiProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

const Card = forwardRef<RefDiv, CardUiProps>((props, ref) => {
  const { className, children, ...otherProps } = props;
  return (
    <div
      ref={ref}
      {...otherProps}
      className={classNames(cls.CardUi, {}, [className])}
    >
      {children}
    </div>
  );
});

export const CardUi = typedMemo(Card);
