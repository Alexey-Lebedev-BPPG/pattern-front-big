import { ReactNode, memo, useCallback, useState } from 'react';
import cls from './CollapseFilters.module.scss';
import { IconButton } from '../../Buttons';
import { Icon } from '../../Icon';
import { VStack, HStack } from '../../Stack';
import { CollapseUi } from '../CollapseUi/CollapseUi';
import logo from '@/shared/assets/svg/logo.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface CollapseFiltersProps {
  className?: string;
  handleClick?: () => void;
  open: boolean;
  children: ReactNode;
  title: string;
  disabled?: boolean;
  classCollapse?: string;
}

export const CollapseFilters = memo((props: CollapseFiltersProps) => {
  const {
    className,
    children,
    open: isOpen,
    title,
    disabled,
    handleClick,
    classCollapse,
  } = props;

  const [open, setOpen] = useState(isOpen);

  const handleOpen = useCallback(() => {
    !disabled && handleClick?.();
    !disabled && setOpen(!open);
  }, [disabled, handleClick, open]);

  return (
    <VStack
      className={classNames(cls.CollapseFilters, { [cls.open]: open }, [
        className,
      ])}
    >
      <HStack
        max
        justify='between'
        className={cls.titleWrapper}
        onClick={handleOpen}
      >
        <span>{title}</span>
        {!disabled && (
          <IconButton className={cls.expandBtn}>
            {open ? <Icon Svg={logo} /> : <Icon Svg={logo} />}
          </IconButton>
        )}
      </HStack>
      <CollapseUi
        open={open}
        className={classNames(cls.statusCollapse, {}, [classCollapse])}
      >
        <div className={cls.items}>{children}</div>
      </CollapseUi>
    </VStack>
  );
});
