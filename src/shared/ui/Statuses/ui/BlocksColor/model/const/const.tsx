import cls from '../../../../../../styles/selectColor.module.scss';
import { AllStatuses } from '../../../../../../types/ui';
import { Icon } from '../../../../../Icon';
import logo from '@/shared/assets/svg/logo.svg';

export const selectBackgroundInCardCost = (status: AllStatuses) => {
  if (status === 'Minted') return cls.gray;
  if (status === 'Burned') return cls.red;
  if (status === 'Listed') return cls.green;
  if (status === 'Frozen') return cls['white-blue'];
  if (
    status === 'Received' ||
    status === 'Shipped' ||
    status === 'Processing' ||
    status === 'Valid' ||
    status === 'Delivered' ||
    status === 'Transferred' ||
    status === 'PaymentReceived' ||
    status === 'AwaitingSign'
  )
    return cls.blue;
  return cls.orange;
};

export const currentSVG = (status: AllStatuses) => {
  if (status === 'Burned')
    return (
      <div className='burned'>
        <Icon Svg={logo} />
      </div>
    );
  if (status === 'Frozen') return <Icon Svg={logo} />;
  if (status === 'Invalid') return <Icon Svg={logo} />;
  if (status === 'Listed') return <Icon Svg={logo} />;
  return <Icon Svg={logo} />;
};

export const currentSubTitle = (status: AllStatuses) => {
  if (
    status === 'Valid' ||
    status === 'New' ||
    status === 'Canceled' ||
    status === 'Shipped' ||
    status === 'Received' ||
    status === 'Processing'
  )
    return 'Value of box';
  if (status === 'Invalid') return 'Please contact support';
  if (status === 'Frozen') return 'Not available for any action';
  if (status === 'Burned') return 'pNFT returned to the owner';
  if (status === 'Listed') return 'Asking price';
  return 'Insured value';
};
