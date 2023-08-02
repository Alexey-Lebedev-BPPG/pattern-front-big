import { FC, HTMLAttributes, ReactNode } from 'react';
import cls from './Modal.module.scss';
import { Overlay } from '../../Overlay';
import { Portal } from '../../Portal';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Justify } from '@/shared/types/ui';

interface IModalProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  lazy?: boolean;
  blur?: boolean;
  justify?: Justify;
  isOverlay?: boolean;
}

export const Modal: FC<IModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
  lazy = true,
  blur = true,
  justify = 'center',
  isOverlay = true,
  ...otherProps
}) => {
  const { theme } = useTheme();
  const { isClosing, isMounting, close } = useModal({
    animationDelay: 0,
    isOpen,
    onClose,
  });

  const mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounting) return null;

  return (
    <Portal>
      <div
        className={classNames(cls.modal, mods, [
          theme,
          cls[justify],
          'app_modal',
        ])}
      >
        <Overlay
          blur={blur}
          className={isOverlay ? '' : cls['no-overlay']}
          onClick={close}
        />
        <div
          {...otherProps}
          className={classNames(cls.content, {}, [
            className,
            isOverlay ? '' : cls['no-overlay'],
          ])}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};
