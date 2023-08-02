import { memo, ReactNode } from 'react';
import Collapse from './Collapse';
import cls from './collapseUI.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface CollapseUiProps {
  className?: string;
  children: ReactNode;
  open: boolean;
}
export const CollapseUi = memo((props: CollapseUiProps) => {
  const { className, children, open } = props;
  return (
    <div className={classNames(cls.collapse, {}, [className])}>
      <Collapse lazy open={open}>
        {children}
      </Collapse>
    </div>
  );
});
