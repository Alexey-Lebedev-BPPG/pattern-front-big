import { FC, memo, useMemo } from 'react';
import { Icon } from '../../../../../Icon';
import { HStack, VStack } from '../../../../../Stack';
import {
  currentSVG,
  currentSubTitle,
  selectBackgroundInCardCost,
} from '../../model/const/const';
import cls from '../../model/styles/blockColor.module.scss';
import { IBlockCoastsProps } from '../../model/types/types';
import logo from '@/shared/assets/svg/logo.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { convertNumberInK } from '@/shared/lib/helpers/convertNumberInK';

export const BlockCosts: FC<IBlockCoastsProps> = memo(props => {
  const {
    className,
    status,
    amount = '2',
    countBoxes = 0,
    tooltip,
    value1,
    value2,
    subtitle,
    typeListed = 'card',
    fullWidth,
    ...otherProps
  } = props;

  const isDouble = amount === '2';
  const listedStatus = status === 'Listed';

  const currentSubtitleInSecondBlock = useMemo(() => {
    if (isDouble) return <p>{'Value of box'}</p>;
    if (listedStatus && typeListed === 'boxes')
      return (
        <p>
          {'Available'}
          <span>
            {countBoxes} {'boxes'}
          </span>
        </p>
      );
    if (listedStatus && typeListed === 'card') return <p>{'Asking price'}</p>;
    return <p>{subtitle || currentSubTitle(status)}</p>;
  }, [countBoxes, isDouble, listedStatus, status, subtitle, typeListed]);

  const selectSvg = useMemo(
    () => (isDouble ? <Icon Svg={logo} /> : currentSVG(status)),
    [isDouble, status],
  );

  const colorBackground = selectBackgroundInCardCost(status);

  const wrapperMods = {
    [cls.padding]: isDouble,
  };

  return (
    <div
      {...otherProps}
      className={classNames(cls.cardCosts, { [cls.full]: fullWidth }, [
        className,
        colorBackground,
      ])}
    >
      <HStack className={classNames(cls.wrapper, wrapperMods, [])}>
        {!!isDouble && (
          <VStack gap={0.125} className={cls.block}>
            <HStack className={cls.top}>
              <h5>{convertNumberInK(value1 || '0', 'roundUp')}</h5>
              <Icon Svg={logo} />
            </HStack>
            <div className={cls.line} />
            <p>{'Number of cards'}</p>
          </VStack>
        )}
        <VStack gap={0.125} className={cls.block}>
          {!!listedStatus && typeListed === 'boxes' && <h3>{'BEST SALE'}</h3>}
          <HStack className={cls.top}>
            <h5>{convertNumberInK(value2, 'roundUp')}</h5>
            {selectSvg}
            {!!listedStatus && typeListed === 'boxes' && (
              <span>{'/ per box'}</span>
            )}
          </HStack>
          {!isDouble && !!tooltip && (
            <div className={cls.note}>
              <Icon Svg={logo} />
            </div>
          )}
          <div className={cls.line} />
          {currentSubtitleInSecondBlock}
        </VStack>
      </HStack>
    </div>
  );
});
