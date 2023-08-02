import { memo } from 'react';
import cls from './ServiceError.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';

export interface ServiceErrorProps {
  className?: string;
  type?: 'sealedBox';
}
export const ServiceError = memo((props: ServiceErrorProps) => {
  const { className, type } = props;

  return (
    <VStack
      max
      justify='center'
      align='center'
      gap={2.5}
      className={classNames(cls.ServiceError, {}, [className])}
    >
      <div className={cls.title}>{'Something went wrong'} </div>
      <div className={cls.subTitle}>
        {'There was a problem processing the request'}
      </div>
    </VStack>
  );
});
