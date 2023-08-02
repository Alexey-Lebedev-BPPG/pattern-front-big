import {
  CSSProperties,
  forwardRef,
  HTMLAttributes,
  memo,
  ReactNode,
} from 'react';
import cls from './Flex.module.scss';
import { classNames, Mods } from '../../../lib/classNames/classNames';

export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'unset';
export type FlexAlign = 'start' | 'center' | 'end' | 'stretch';
export type FlexDirection = 'row' | 'column';
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';

const justifyClass: Record<FlexJustify, string> = {
  between: cls.justifyBetween,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  start: cls.justifyStart,
  unset: cls.justifyUnset,
};

const alignClass: Record<FlexAlign, string> = {
  center: cls.alignCenter,
  end: cls.alignEnd,
  start: cls.alignStart,
  stretch: cls.alignStretch,
};

const directionClass: Record<FlexDirection, string> = {
  column: cls.directionColumn,
  row: cls.directionRow,
};

const wrapClass: Record<FlexWrap, string> = {
  nowrap: cls.nowrap,
  wrap: cls.wrap,
  'wrap-reverse': cls['wrap-reverse'],
};

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  wrap?: FlexWrap;
  direction: FlexDirection;
  gap?: number | string;
  max?: boolean;
  style?: CSSProperties;
}

const FlexUi = forwardRef<RefDiv, FlexProps>((props, ref) => {
  const {
    className,
    children,
    direction = 'row',
    align = 'center',
    justify = 'start',
    gap = 0,
    wrap = 'nowrap',
    max,
    style,
    ...otherProps
  } = props;

  const classes = [
    className,
    justifyClass[justify],
    alignClass[align],
    directionClass[direction],
    wrapClass[wrap],
  ];
  const mods: Mods = {
    [cls.max]: max,
  };
  return (
    <div
      ref={ref}
      style={{ ...style, gap: `${gap}rem` }}
      className={classNames(cls.Flex, mods, classes)}
      {...otherProps}
    >
      {children}
    </div>
  );
});

export const Flex = memo(FlexUi);
