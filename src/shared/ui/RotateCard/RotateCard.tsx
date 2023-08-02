import { FC, memo } from 'react';
import cls from './rotateCard.module.scss';
import { AppImage } from '../AppImage';
import { HStack } from '../Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getCurrentSizeImageInTable } from '@/shared/lib/helpers/getCurrentSizeImageInTable/getCurrentSizeImageInTable';
import { selectBackgroundInStatusCard } from '@/shared/styles/const';
import { AllStatuses } from '@/shared/types/ui';

interface IRotateCardProps {
  status: AllStatuses;
  frontImage: string;
  backImage: string;
  alt?: string;
  orientation: 'horizontal' | 'vertical';
  inShipment?: boolean;
}

export const RotateCard: FC<IRotateCardProps> = memo(props => {
  const {
    status,
    frontImage,
    backImage,
    alt = '',
    orientation,
    inShipment = false,
  } = props;

  const { height, width } = getCurrentSizeImageInTable(
    orientation,
    inShipment ? 'l' : 'xxl',
  );

  const colorBackground = selectBackgroundInStatusCard(status);

  return (
    <HStack
      justify='center'
      className={classNames(cls['rotate-card'], {}, [colorBackground])}
    >
      <HStack justify='center' className={cls.front}>
        <AppImage src={frontImage} alt={alt} width={width} height={height} />
      </HStack>
      <HStack max justify='center' className={cls.back}>
        <AppImage src={backImage} alt={alt} width={width} height={height} />
      </HStack>
    </HStack>
  );
});
