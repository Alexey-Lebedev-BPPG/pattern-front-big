import { useState, useLayoutEffect, useMemo } from 'react';
import { DebounceOptionsT, debounce } from '../helpers/debounce';

export type UseDebounceInputOptionsT<E extends { target: { value: string } }> =
  {
    value: string;
    setValue: (value: string) => void;
    onChange?: (e: E) => void;
    debounceOptions?: DebounceOptionsT;
  };

const useDebounceInput = <E extends { target: { value: string } }>({
  value,
  setValue,
  onChange,
  debounceOptions,
}: UseDebounceInputOptionsT<E>) => {
  const [localValue, setLocalValue] = useState(value);

  useLayoutEffect(() => {
    setLocalValue(value);
  }, [value]);

  const setValueWrap = useMemo(() => {
    const debouncedSetValue = debounce(setValue, debounceOptions);
    return (e: E) => {
      if (onChange !== undefined) onChange(e);
      const newValue = e.target.value;
      setLocalValue(newValue);
      debouncedSetValue(newValue);
    };
  }, [setValue, onChange, debounceOptions]);

  return { onChange: setValueWrap, value: localValue };
};

export default useDebounceInput;
