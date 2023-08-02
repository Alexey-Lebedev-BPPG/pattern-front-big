import { Menu } from '@headlessui/react';
import { FC, Fragment, ReactNode, useMemo } from 'react';
import popupCls from '../../../../styles/popups.module.scss';
import { Links } from '../../../Links/Links';
import { Spinner } from '../../../Loaders';
import { classNames } from '@/shared/lib/classNames/classNames';
import { mapDirectionClass } from '@/shared/styles/const';
import { DropDownDirection } from '@/shared/types/ui';

export interface DropdownItem {
  content?: ReactNode;
  Icon?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
}

interface IDropdownProps {
  className?: string;
  direction?: DropDownDirection;
  items: DropdownItem[];
  trigger: ReactNode;
  size?: 'large' | 'small';
  minWidth?: string | number;
}

export const Dropdown: FC<IDropdownProps> = props => {
  const {
    className,
    direction = 'bottom left',
    items,
    trigger,
    size = 'large',
    minWidth = 8,
  } = props;

  const menuClasses = useMemo(
    () => classNames(popupCls.menu, {}, [mapDirectionClass[direction]]),
    [direction],
  );

  const currentIcon = (loading?: boolean, Icon?: ReactNode) => {
    if (loading) return <Spinner size={16} />;
    if (Icon) return Icon;
    return null;
  };

  return (
    <Menu as='div' className={classNames(popupCls.popup, {}, [className])}>
      <Menu.Button as='div' className={popupCls.trigger}>
        {trigger}
      </Menu.Button>
      <Menu.Items
        className={menuClasses}
        style={{ minWidth: `${minWidth}rem` }}
      >
        {items.map(
          ({ content, disabled, href, onClick, loading, Icon }, index) => {
            const contentMenuItem = ({ active }: { active: boolean }) => (
              <button
                type='button'
                disabled={disabled}
                className={classNames(
                  popupCls.item,
                  {
                    [popupCls.active]: active,
                    [popupCls.disabled]: disabled,
                  },
                  [popupCls[size]],
                )}
                onClick={onClick}
              >
                {currentIcon(loading, Icon)}
                {content}
              </button>
            );

            if (href)
              return (
                <Menu.Item key={index} as={Links} to={href} disabled={disabled}>
                  {contentMenuItem}
                </Menu.Item>
              );

            return (
              <Menu.Item key={index} as={Fragment} disabled={disabled}>
                {contentMenuItem}
              </Menu.Item>
            );
          },
        )}
      </Menu.Items>
    </Menu>
  );
};
