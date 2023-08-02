import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  /**
   * what will be teleported
   */
  children?: ReactNode;
  /**
   * what we're going to teleport
   */
  element?: HTMLElement;
}

export const Portal: FC<IPortalProps> = ({
  children,
  element = document.body,
}) => createPortal(children, element);
