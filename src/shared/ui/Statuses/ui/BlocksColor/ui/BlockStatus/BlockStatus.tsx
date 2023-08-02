import { FC, memo, useMemo } from 'react';
import { HStack, VStack } from '../../../../../Stack';
import {
  currentSVG,
  currentSubTitle,
  selectBackgroundInCardCost,
} from '../../model/const/const';
import cls from '../../model/styles/blockColor.module.scss';
import { IBlockStatusProps } from '../../model/types/types';
import { classNames } from '@/shared/lib/classNames/classNames';

export const BlockStatus: FC<IBlockStatusProps> = memo(props => {
  const { className, status, ...otherProps } = props;

  const currentTitle = useMemo(() => {
    if (status === 'Invalid') return 'Invalid';
    if (status === 'Frozen') return 'Frozen';
    if (status === 'Burned') return 'Burned';
  }, [status]);

  const colorBackground = selectBackgroundInCardCost(status);

  return (
    <div
      {...otherProps}
      className={classNames(cls.cardCosts, {}, [className, colorBackground])}
    >
      <VStack gap={0.125} className={cls.block}>
        <HStack justify='between' className={cls.top}>
          <h5>{currentTitle}</h5>
          {currentSVG(status)}
        </HStack>
        <div className={cls.line} />
        <p>{currentSubTitle(status)}</p>
      </VStack>
    </div>
  );
});
