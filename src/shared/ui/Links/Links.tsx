import { FC, memo } from 'react';
import { LinkProps, Link } from 'react-router-dom';
import cls from './Links.module.scss';
import { classNames } from '../../lib/classNames/classNames';

export interface LinksProps extends LinkProps {
  className?: string;
}

export const Links: FC<LinksProps> = memo((props: LinksProps) => {
  const { to, className, children, ...otherProps } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.Links, {}, [className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
