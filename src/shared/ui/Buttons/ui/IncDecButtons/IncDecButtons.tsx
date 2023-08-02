import { FC, memo, Dispatch, SetStateAction } from 'react';
import cls from './IncDecButtons.module.scss';
import { Icon } from '../../../Icon';
import { PTag } from '../../../Ptags/Ptags';
import { HStack } from '../../../Stack';
import { IconButton } from '../IconButton/IconButton';
import logo from '@/shared/assets/svg/logo.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface IncDecButtonsProps {
  className?: string;
  maximumValue: number;
  minimumValue: number;
  quantity: number;
  updateQuantity: Dispatch<SetStateAction<number>>;
}

export const IncDecButtons: FC<IncDecButtonsProps> = memo(
  (props: IncDecButtonsProps) => {
    const { className, updateQuantity, maximumValue, minimumValue } = props;
    let { quantity } = props;

    const isIncDisabled = quantity === minimumValue;
    const isDecDisabled = quantity === maximumValue;

    const incrementValue = () => {
      updateQuantity(++quantity);
    };

    const decrementValue = () => {
      updateQuantity(--quantity);
    };

    return (
      <HStack
        justify='between'
        align='center'
        className={classNames(cls.IncDecButtonsWrapper, {}, [className])}
      >
        <IconButton
          size='32'
          type='button'
          className={cls.buttonItem}
          disabled={isIncDisabled}
          onClick={decrementValue}
        >
          <Icon Svg={logo} />
        </IconButton>
        <PTag tag='value'>{quantity}</PTag>
        <IconButton
          size='32'
          className={cls.buttonItem}
          disabled={isDecDisabled}
          onClick={incrementValue}
        >
          <Icon Svg={logo} />
        </IconButton>
      </HStack>
    );
  },
);
