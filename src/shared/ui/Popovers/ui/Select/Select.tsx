import { Listbox } from '@headlessui/react';
import { FC, Fragment, ReactNode, memo, useCallback, useMemo } from 'react';
import cls from './select.module.scss';
import popupCls from '../../../../styles/popups.module.scss';
import { Icon } from '../../../Icon';
import clsInput from '../../../Inputs/model/styles/inputStyles.module.scss';
import { HStack } from '../../../Stack';
import logo from '@/shared/assets/svg/logo.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { mapDirectionClass } from '@/shared/styles/const';
import { DropDownDirection } from '@/shared/types/ui';

export interface SelectItem {
  content: ReactNode;
  disabled?: boolean;
  value: string;
}

interface ISelectProps {
  className?: string;
  classNameInput?: string;
  classNamePopup?: string;
  defaultValue?: string;
  direction?: DropDownDirection;
  items: SelectItem[];
  label?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  value?: string;
  placeholder?: string;
  fullWidth?: boolean;
  triggerContent?: ReactNode;
  size?: 'large' | 'small';
  minWidth?: string | number;
}

export const Select: FC<ISelectProps> = memo(props => {
  const {
    className,
    classNameInput,
    classNamePopup,
    defaultValue,
    direction = 'bottom left',
    items,
    label,
    onChange,
    readonly,
    value,
    placeholder,
    fullWidth,
    triggerContent,
    size = 'large',
    minWidth = '8',
  } = props;

  const currentClassNamePopup = useMemo(
    () =>
      classNames(popupCls.popup, { [clsInput.fullWidth]: fullWidth }, [
        className,
      ]),
    [className, fullWidth],
  );

  const classNameInputSelect = useMemo(
    () =>
      classNames(
        clsInput.input,
        {
          [cls.placeholder]: !!placeholder,
          [clsInput.fullWidth]: fullWidth,
        },
        [cls['input-select'], classNameInput, cls[size]],
      ),
    [classNameInput, fullWidth, placeholder, size],
  );

  const classNameSelect = useMemo(
    () =>
      classNames(popupCls.menu, {}, [
        mapDirectionClass[direction],
        classNamePopup,
      ]),
    [classNamePopup, direction],
  );

  const optionList = useMemo(
    () =>
      items.map(item => (
        <Listbox.Option
          key={item.value}
          value={item.value}
          as={Fragment}
          disabled={item.disabled}
        >
          {({ active, selected }) => (
            <li
              className={classNames(
                popupCls.item,
                {
                  [popupCls.active]: active,
                  [popupCls.disabled]: item.disabled,
                  [popupCls.selected]: selected,
                },
                [popupCls[size]],
              )}
            >
              {item.content}
            </li>
          )}
        </Listbox.Option>
      )),
    [items, size],
  );

  const currentTriggerContent = useCallback(
    (open: boolean) =>
      triggerContent || (
        <HStack
          gap='0.5'
          justify='between'
          className={classNameInputSelect}
          style={{ minWidth: `${minWidth}rem` }}
        >
          {value || defaultValue || placeholder}
          {open ? <Icon Svg={logo} /> : <Icon Svg={logo} />}
        </HStack>
      ),
    [
      classNameInputSelect,
      defaultValue,
      minWidth,
      placeholder,
      triggerContent,
      value,
    ],
  );

  return (
    <HStack gap='0.5'>
      {!!label && <span>{label}</span>}
      <Listbox
        as='div'
        disabled={readonly}
        value={value}
        className={currentClassNamePopup}
        onChange={onChange}
      >
        {({ open }) => (
          <>
            <Listbox.Button as='div' className={popupCls.trigger}>
              {currentTriggerContent(open)}
            </Listbox.Button>
            <Listbox.Options
              className={classNameSelect}
              style={{ minWidth: `${minWidth}rem` }}
            >
              {optionList}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </HStack>
  );
});
