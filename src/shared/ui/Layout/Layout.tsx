import { HTMLAttributes, ReactElement } from 'react';
import cls from './Layout.module.scss';
import { classNames } from '../../lib/classNames/classNames';

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactElement;
}
export const Layout = (props: LayoutProps) => {
  const { className, children, ...otherProps } = props;
  return (
    <div {...otherProps} className={classNames(cls.Layout, {}, [className])}>
      {children}
    </div>
  );
};
