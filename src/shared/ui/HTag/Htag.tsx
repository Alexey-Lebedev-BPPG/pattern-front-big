import { CSSProperties, ReactNode, memo } from 'react';
import cls from './Htag.module.scss';
import { classNames } from '../../lib/classNames/classNames';

export type hTypes =
  | 'W-H1-CL'
  | 'W-H2-CL'
  | 'W-H3-CL'
  | 'W-H4-CL'
  | 'H4-CL'
  | 'W-H5-CL'
  | 'W-H6-CL'
  | 'W-H7-CL'
  | 'w-H8-CL-UP'
  | 'W-H1'
  | 'W-H2'
  | 'W-H3'
  | 'W-H4';

const HClass: Record<hTypes, string> = {
  'H4-CL': cls.H4_CL,
  'W-H1': cls.W_H1,
  'W-H1-CL': cls.W_H1_CL,
  'W-H2': cls.W_H2,
  'W-H2-CL': cls.W_H2_CL,
  'W-H3': cls.W_H3,
  'W-H3-CL': cls.W_H3_CL,
  'W-H4': cls.W_H4,
  'W-H4-CL': cls.W_H4_CL,
  'W-H5-CL': cls.W_H5_CL,
  'W-H6-CL': cls.W_H6_CL,
  'W-H7-CL': cls.W_H7_CL,
  'w-H8-CL-UP': cls.W_H8_CL_UP,
};

export interface HtagProps {
  className?: string;
  tag: hTypes;
  children: ReactNode;
  style?: CSSProperties;
}

export const Htag = memo((props: HtagProps): JSX.Element => {
  const { children, tag, className, style, ...otherProps } = props;

  const classes = [className, HClass[tag]];

  return (
    <span style={style} {...otherProps} className={classNames('', {}, classes)}>
      {children}
    </span>
  );
});
