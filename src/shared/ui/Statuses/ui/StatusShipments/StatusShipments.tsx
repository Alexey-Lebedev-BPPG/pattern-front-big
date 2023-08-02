import { FC, memo, useMemo } from 'react';
import cls from './statusShipments.module.scss';
import { Icon } from '../../../Icon';
import { HStack } from '../../../Stack';
import logo from '@/shared/assets/svg/logo.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AllStatuses } from '@/shared/types/ui';

interface IStatusShipmentsProps {
  number: string;
  status: AllStatuses;
}

export const StatusShipments: FC<IStatusShipmentsProps> = memo(props => {
  const { status, number } = props;

  const selectShipmentTitle = useMemo(() => {
    if (status === 'New') return 'Waiting for Tracking #';
    if (status === 'Shipped') return 'In Transit';
    if (status === 'Received') return 'Received';
    if (status === 'Processing') return 'Processing';
    if (status === 'PaymentPending') return 'Payment Pending';
    if (status === 'PaymentReceived') return 'Payment Received';
    if (status === 'PartlyMinted' || status === 'FullyMinted')
      return 'Completed';
    return 'Canceled';
  }, [status]);

  const selectIcon = useMemo(() => {
    if (status === 'Canceled') return <Icon Svg={logo} />;
    if (
      status === 'Pending' ||
      status === 'PaymentPending' ||
      status === 'Delivered' ||
      status === 'Processing' ||
      status === 'Shipped' ||
      status === 'PaymentReceived' ||
      status === 'Received' ||
      status === ''
    )
      return <Icon Svg={logo} />;
    return <Icon Svg={logo} />;
  }, [status]);

  const mods = {
    [cls[status]]: true,
  };

  return (
    <HStack className={cls['status-shipments']}>
      <HStack className={classNames(cls.left, mods, [])}>
        {selectIcon}
        <p>{selectShipmentTitle}</p>
      </HStack>
      <HStack className={cls.right}>
        <Icon Svg={logo} />
        <p>{number}</p>
      </HStack>
    </HStack>
  );
});
