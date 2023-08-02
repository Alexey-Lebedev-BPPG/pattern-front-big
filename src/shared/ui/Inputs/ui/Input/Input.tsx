import {
  ChangeEvent,
  Dispatch,
  FC,
  InputHTMLAttributes,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import cls from './Input.module.scss';
import { Icon } from '../../../Icon';
import { HStack, VStack } from '../../../Stack';
import clsInput from '../../model/styles/inputStyles.module.scss';
import logo from '@/shared/assets/svg/logo.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { debounce } from '@/shared/lib/helpers/debounce';
import {
  IValidateInputsProps,
  validateInputs,
} from '@/shared/lib/helpers/validateInputs';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface IInputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  isValidate?: boolean;
  label?: string;
  fullWidth?: boolean;
  min?: number;
  max?: number;
  error?: string;
  isError?: boolean;
  setError?: Dispatch<SetStateAction<string>>;
  onClickButton?: any;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  afterIcon?: ReactNode;
  children?: ReactNode;
  endIconClass?: string;
  errorIcon?: ReactNode;
  errorClass?: string;
}

export const Input: FC<IInputProps> = props => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    fullWidth = true,
    isValidate = false,
    label,
    autofocus,
    min,
    max,
    error,
    isError,
    setError,
    startIcon,
    endIcon,
    afterIcon,
    children,
    endIconClass,
    errorClass,
    errorIcon,
    id,
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);

  const handleValidate = useCallback(
    (newValue: string): any => {
      const options: IValidateInputsProps = { max, min, required: true, type };
      setError?.(validateInputs(newValue, options));
    },
    [max, min, setError, type],
  );

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
      if (isValidate)
        event.target.value !== ''
          ? debounce(handleValidate(event.target.value))
          : setError?.('');
    },
    [handleValidate, isValidate, onChange, setError],
  );

  useEffect(() => {
    if (autofocus) ref.current?.focus();
  }, [autofocus]);

  const modsWrapper = {
    [clsInput.fullWidth]: fullWidth,
  };

  const modsContainer = {
    [clsInput.fullWidth]: fullWidth,
    [cls.afterIcon]: !!afterIcon,
  };

  const modsInput = {
    [clsInput.error]: !!error || isError,
    [clsInput.fullWidth]: fullWidth,
    [cls.paddingLeft]: !!startIcon,
    [cls.paddingRight]: !!endIcon,
  };

  return (
    <VStack gap='0.5' className={classNames('', modsWrapper, [])}>
      {!!label && (
        <label htmlFor={label || id || 'input'} className={clsInput.label}>
          {label}
        </label>
      )}
      <VStack
        gap={0.5}
        className={classNames(clsInput.container, modsContainer, [])}
      >
        <input
          ref={ref}
          id={label || id || 'input'}
          autoComplete='off'
          type={type}
          className={classNames(clsInput.input, modsInput, [className])}
          value={value}
          onWheel={(e: any) => e.target.blur()}
          onChange={onChangeHandler}
          {...otherProps}
        />
        {!!startIcon && <div className={clsInput.startIcon}>{startIcon}</div>}
        {!!endIcon && (
          <div className={classNames(clsInput.endIcon, {}, [endIconClass])}>
            {endIcon}
          </div>
        )}
        {afterIcon}
        {children}
        {!!error && (
          <HStack
            gap='0.25'
            className={classNames(clsInput.errorText, {}, [errorClass])}
          >
            {errorIcon || <Icon Svg={logo} />}
            <span>{error}</span>
          </HStack>
        )}
      </VStack>
    </VStack>
  );
};
