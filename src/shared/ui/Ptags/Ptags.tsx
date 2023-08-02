import { CSSProperties, HTMLAttributes, memo, ReactNode } from 'react';
import cls from './Ptags.module.scss';
import { classNames } from '../../lib/classNames/classNames';

export type pTypes = 'name' | 'value';
export type TextAlign = 'center' | 'right' | 'left';

const PClass: Record<pTypes, string> = {
  name: cls.name,
  value: cls.value,
};

const TExtAlignClass: Record<TextAlign, string> = {
  center: cls.center,
  left: cls.left,
  right: cls.right,
};

export interface PProps extends HTMLAttributes<HTMLParagraphElement> {
  tag: pTypes;
  textAlign?: TextAlign;
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
}

export const PTag = memo((props: PProps) => {
  const {
    className,
    children,
    tag = 'name',
    style,
    textAlign = 'center',
  } = props;
  const classes = [className, PClass[tag], TExtAlignClass[textAlign]];
  return (
    <p style={style} className={classNames('', {}, classes)}>
      {children}
    </p>
  );
});
