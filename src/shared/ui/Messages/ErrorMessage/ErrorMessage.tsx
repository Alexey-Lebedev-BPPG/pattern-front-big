import { memo } from 'react';
import cls from './ErrorMessage.module.scss';
import { classNames } from '../../../lib/classNames/classNames';

export interface ErrorMessageProps {
  className?: string;
  errorMessage: string;
}
export const ErrorMessage = memo((props: ErrorMessageProps) => {
  const { className, errorMessage } = props;
  return (
    <span className={classNames(cls.ErrorMessage, {}, [className])}>
      {errorMessage}
    </span>
  );
});
