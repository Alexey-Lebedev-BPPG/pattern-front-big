import { FC, HTMLAttributes, memo, useMemo } from 'react';
import cls from './status.module.scss';
import { Icon } from '../../../Icon';
import { HStack } from '../../../Stack';
import logo from '@/shared/assets/svg/logo.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AllStatuses } from '@/shared/types/ui';

export interface IStatusProps extends HTMLAttributes<HTMLDivElement> {
  status: AllStatuses;
  noText?: boolean;
}

export const Status: FC<IStatusProps> = memo(props => {
  const { status = 'Default', noText = false, ...otherProps } = props;

  const currentTitle = useMemo(() => {
    if (status === 'Transferred') return 'Finished';
    if (status === 'AwaitingSign') return 'AwaitingSign';
    if (status === 'Rejected') return 'Not Eligible';
    if (status === 'RequestedBack') return 'Requested Back';
    if (status === 'Burned') return 'Burned';
    if (status === 'Minted') return 'Verified';
    return 'Default';
  }, [status]);

  const mods = {
    [cls[status]]: true,
  };

  return (
    <HStack
      gap={0.25}
      className={classNames(cls.status, mods, [])}
      {...otherProps}
    >
      {status === 'Transferred' && <Icon Svg={logo} />}
      {status === 'Burned' && <Icon Svg={logo} />}
      {!noText && <span>{currentTitle}</span>}
    </HStack>
  );
});
