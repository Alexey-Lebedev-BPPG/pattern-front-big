import { Combobox } from '@headlessui/react';
import {
  useState,
  FC,
  memo,
  useMemo,
  HTMLAttributes,
  Fragment,
  useEffect,
} from 'react';
import cls from './autocomplete.module.scss';
import popupCls from '../../../../styles/popups.module.scss';
import { IconButton } from '../../../Buttons';
import { Icon } from '../../../Icon';
import clsInput from '../../model/styles/inputStyles.module.scss';
import logo from '@/shared/assets/svg/logo.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AutocompleteProps
  extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
  className?: string;
  classNamePopup?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  items: string[];
  fullWidth?: boolean;
  size?: 'large' | 'small';
  minWidth?: string | number;
}

export const Autocomplete: FC<AutocompleteProps> = memo(props => {
  const {
    value,
    className,
    classNamePopup,
    onChange,
    items,
    label,
    placeholder,
    fullWidth,
    size = 'large',
    minWidth = '8',
  } = props;

  const [selected, setSelected] = useState(value);
  const [valueInput, setValueInput] = useState(value);

  const filteredPeople = useMemo(
    () =>
      valueInput === ''
        ? items
        : items.filter(item =>
            item
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(valueInput.toLowerCase().replace(/\s+/g, '')),
          ),
    [items, valueInput],
  );

  const onChangeHandler = (newItem: string) => {
    setSelected(newItem);
    setValueInput(newItem);
    onChange?.(newItem);
  };

  const modsInput = {
    [clsInput.fullWidth]: fullWidth,
  };

  useEffect(() => {
    if (typeof value === 'string') {
      setSelected(value);
      setValueInput(value);
    }
  }, [value]);

  return (
    <Combobox value={selected} onChange={onChangeHandler}>
      {({ open }) => (
        <div
          className={classNames(
            clsInput.container,
            { [clsInput.fullWidth]: fullWidth },
            [],
          )}
        >
          <Combobox.Button className={cls.button} as='div'>
            {!!label && (
              <label htmlFor='input' className={clsInput.label}>
                {label}
              </label>
            )}
            <Combobox.Input
              className={classNames(clsInput.input, modsInput, [className])}
              id='input'
              displayValue={(item: string) => item}
              placeholder={placeholder}
              value={valueInput}
              style={{ minWidth: `${minWidth}rem` }}
              onChange={event => setValueInput(event.target.value)}
            />
            <div className={clsInput.endIcon}>
              <IconButton>
                {open ? <Icon Svg={logo} /> : <Icon Svg={logo} />}
              </IconButton>
            </div>
          </Combobox.Button>
          <Combobox.Options
            className={classNames(popupCls.menu, {}, [classNamePopup])}
            as='div'
            style={{ minWidth: `${minWidth}rem` }}
          >
            {filteredPeople.length === 0 && valueInput !== '' ? (
              <div>{'Nothing found.'}</div>
            ) : (
              filteredPeople.map(item => (
                <Combobox.Option key={item} value={item} as={Fragment}>
                  {({ selected: selectedItem, active }) => (
                    <div
                      className={classNames(
                        popupCls.item,
                        {
                          [popupCls.active]: active,
                          [popupCls.selected]: selectedItem,
                        },
                        [popupCls[size]],
                      )}
                    >
                      {item}
                    </div>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </div>
      )}
    </Combobox>
  );
});
