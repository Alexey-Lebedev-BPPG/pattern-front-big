import { FC, memo } from 'react';
import cls from './listingStatus.module.scss';
import { Icon } from '../../../Icon';
import { HStack } from '../../../Stack';
import logo from '@/shared/assets/svg/logo.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AllStatuses } from '@/shared/types/ui';

interface IListingStatusProps {
  status: AllStatuses;
  withText: boolean;
  className?: string;
}

export const ListingStatus: FC<IListingStatusProps> = memo(props => {
  const { status, withText, className } = props;

  const mods = {
    [cls['without-text']]: !withText,
  };

  return (
    status !== 'Burned' && (
      <div className={classNames(cls['listing-status'], {}, [className])}>
        <HStack
          justify='center'
          gap={0.125}
          className={classNames(cls.active, mods, [])}
        >
          <Icon Svg={logo} />
          {!!withText && <span>{'Listed'}</span>}
        </HStack>
      </div>
    )
  );
});
