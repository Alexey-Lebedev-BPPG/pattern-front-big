import { useCallback, useState } from 'react';
import { useDebounce } from '../useDebounce/useDebounce';

export const useOpenAnimate = (open: boolean, delay = 400) => {
  const [openFilter, setOpenFilter] = useState(false);
  const de = open ? 0 : delay;
  const closeFilter = useCallback(() => {
    setOpenFilter(open);
  }, [open]);
  const debouncedFetchData = useDebounce(closeFilter, de);
  debouncedFetchData();
  return openFilter;
};
