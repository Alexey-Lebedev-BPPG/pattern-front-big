import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from 'react';

export const useLazyLoadingObserver = (
  page: string,
  setIsScroll: Dispatch<SetStateAction<boolean>>,
  changeSelectFilter: (
    param: 'page' | 'step' | 'search',
    value: string | boolean | string[] | undefined,
    resetPage?: 'resetPage' | undefined,
  ) => void,
  isLoading: boolean,
  total: number,
) => {
  const isAuth = false;

  const observer = useRef<null | IntersectionObserver>(null);

  const currentRef = useCallback(
    (node: HTMLElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting && total && total > +page) {
            setIsScroll(true);
            changeSelectFilter('page', `${+page + 1}`);
          }
        },
        { threshold: 1 },
      );
      if (node) observer.current.observe(node);
    },
    [changeSelectFilter, isLoading, page, setIsScroll, total],
  );

  useEffect(() => {
    if (page === '1' && isAuth) {
      const myDiv = document.getElementById('PAGE_ID');

      if (myDiv) myDiv.scrollTop = 0;
    }
  }, [isAuth, page]);

  return { currentRef };
};
