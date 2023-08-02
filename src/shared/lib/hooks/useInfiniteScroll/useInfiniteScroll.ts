import { useCallback, useRef } from 'react';

export interface UseInfiniteScrollOptions {
  callback: () => void;
}

export function useInfiniteScroll({ callback }: UseInfiniteScrollOptions) {
  const observer = useRef<null | IntersectionObserver>(null);

  const currentRef = useCallback(
    (node: HTMLElement | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) callback();
        },
        { rootMargin: '0px', threshold: 1 },
      );
      if (node) observer.current.observe(node);
    },
    [callback],
  );
  return { currentRef };
}
