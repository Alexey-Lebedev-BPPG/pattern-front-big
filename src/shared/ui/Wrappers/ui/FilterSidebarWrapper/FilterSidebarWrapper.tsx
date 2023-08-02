import { ReactNode, memo } from 'react';
import cls from './FilterSidebarWrapper.module.scss';
import { VStack } from '../../../Stack';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface FilterSidebarWrapperProps {
  className?: string;
  children: ReactNode;
  open: boolean;
}
export const FilterSidebarWrapper = memo((props: FilterSidebarWrapperProps) => {
  const { className, children, open } = props;
  return (
    <div className={classNames(cls.filterSidebarWrapper, {}, [className])}>
      <VStack
        justify='start'
        gap={1.5}
        className={classNames(cls.Wrapper, { [cls.open]: open }, [className])}
      >
        {children}
      </VStack>
    </div>
  );
});
