import clsPopover from './positions.module.scss';
import cls from './selectColor.module.scss';
import { DropDownDirection, AllStatuses } from '../types/ui';

export const selectBackgroundInStatusCard = (status: AllStatuses) => {
  if (
    status === 'PartlyMinted' ||
    status === 'FullyMinted' ||
    status === 'Minted'
  )
    return cls.green;
  if (status === 'Burned') return cls.red;
  if (status === 'Frozen') return cls['white-blue'];
  if (
    status === 'Received' ||
    status === 'Shipped' ||
    status === 'Processing' ||
    status === 'Canceled' ||
    status === 'Valid' ||
    status === 'Transferred' ||
    status === 'AwaitingSign'
  )
    return cls.blue;
  if (status === '') return cls.transparent;
  return cls.orange;
};

export const mapDirectionClass: Record<DropDownDirection, string> = {
  'bottom left': clsPopover.menuBottomLeft,
  'bottom right': clsPopover.menuBottomRight,
  'top left': clsPopover.menuTopLeft,
  'top right': clsPopover.menuTopRight,
};
