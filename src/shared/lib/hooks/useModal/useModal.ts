import { useState, useRef, useCallback, useEffect } from 'react';

interface UseModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  animationDelay: number;
}

/**
 * @param animationDelay
 * @param isOpen
 * @param onClose
 */

export const useModal = ({
  isOpen,
  onClose,
  animationDelay,
}: UseModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounting, setIsMounting] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, animationDelay);
    }
  }, [animationDelay, onClose]);

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeHandler();
    },
    [closeHandler],
  );

  const banScrolling = useCallback(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
      window.addEventListener('scroll', banScrolling);
    }

    return () => {
      if (timerRef?.current) clearTimeout(timerRef.current);

      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('scroll', banScrolling);
    };
  }, [isOpen, onKeyDown, banScrolling]);

  useEffect(() => {
    if (isOpen) setIsMounting(true);
  }, [isOpen]);

  return { close: closeHandler, isClosing, isMounting };
};
