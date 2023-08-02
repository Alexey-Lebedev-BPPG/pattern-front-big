import { FC, ReactNode, useCallback } from 'react';
import cls from './Page.module.scss';
import { PAGE_ID } from '@/shared/const/pageId';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { TestProps } from '@/shared/types/tests';
import { Align, Justify } from '@/shared/types/ui';

interface IPageProps extends TestProps {
  className?: string;
  children: ReactNode;
  justify?: Justify;
  align?: Align;
}

export const Page: FC<IPageProps> = props => {
  const {
    className,
    children,
    justify = 'center',
    align = 'top',
    ...otherProps
  } = props;

  const scrollUp = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  useInitialEffect(scrollUp);

  return (
    <main
      // ref={wrapperRef}
      className={cls.page}
      // onScroll={onScrollHandler}
      id={PAGE_ID}
      data-testid={otherProps['data-testid'] || 'Page'}
    >
      <div
        className={classNames(cls.content, {}, [
          cls[justify],
          cls[align],
          className,
        ])}
      >
        {children}
      </div>
      {/* {onScrollEnd && <div className={cls.trigger} ref={triggerRef} />} */}
    </main>
  );
};
