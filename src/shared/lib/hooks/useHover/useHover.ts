import { RefObject, useCallback, useEffect, useState } from 'react';

// this hook used by taking ref in our component or element
// this hook will return boolean value, if element is hovered or not

export default function useHover(ref: RefObject<HTMLElement>) {
  const [isHovering, setHovering] = useState(false);

  const on = useCallback(() => setHovering(true), []);
  const off = useCallback(() => setHovering(false), []);

  useEffect(() => {
    if (!ref.current) return;

    const node = ref.current;

    node.addEventListener('mouseenter', on);
    node.addEventListener('mousemove', on);
    node.addEventListener('mouseleave', off);

    return () => {
      node.removeEventListener('mouseenter', on);
      node.removeEventListener('mousemove', on);
      node.removeEventListener('mouseleave', off);
    };
  }, [off, on, ref]);

  return isHovering;
}
