import {
  ChangeEvent,
  FC,
  TextareaHTMLAttributes,
  memo,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { VStack } from '../../../Stack';
import cls from '../../model/styles/inputStyles.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

type HTMLTextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'value' | 'onChange'
>;

interface ITextAreaProps extends HTMLTextareaProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  label?: string;
  fullWidth?: boolean;
  sizeRows?: number;
}

export const TextArea: FC<ITextAreaProps> = memo(props => {
  const {
    className,
    value,
    onChange,
    autofocus,
    label,
    fullWidth = true,
    sizeRows = 4,
    ...otherProps
  } = props;
  const ref = useRef<HTMLTextAreaElement>(null);

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(event.target.value);
    },
    [onChange],
  );

  useEffect(() => {
    if (autofocus) ref.current?.focus();
  }, [autofocus]);

  const modsWrapper = {
    [cls.fullWidth]: fullWidth,
  };

  const modsArea = {
    [cls.fullWidth]: fullWidth,
  };

  return (
    <VStack gap='0.5' className={classNames('', modsWrapper, [])}>
      {!!label && (
        <label htmlFor='textarea' className={cls.label}>
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id='textarea'
        rows={sizeRows}
        className={classNames(cls.input, modsArea, [className])}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </VStack>
  );
});
