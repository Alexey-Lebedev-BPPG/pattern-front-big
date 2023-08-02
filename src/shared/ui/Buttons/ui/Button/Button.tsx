import {
  ButtonHTMLAttributes,
  FC,
  ReactNode,
  SVGProps,
  createElement,
  memo,
  useCallback,
  useMemo,
} from 'react';
import cls from './Button.module.scss';
import { Spinner } from '../../../Loaders';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SizeElement } from '@/shared/types/ui';

type TypeButton =
  | 'clear'
  | 'primary'
  | 'primary-alternative'
  | 'secondary'
  | 'secondary-alternative'
  | 'ghost'
  | 'black'
  | 'black-alternative'
  | 'white';

type SizeButton =
  | 'large-alternative'
  | 'medium-alternative'
  | 'small-alternative';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  typeButton?: TypeButton;
  size?: SizeButton | SizeElement;
  children?: ReactNode;
  fullWidth?: boolean;
  text?: string;
  isLoading?: boolean;
  img?: FC<SVGProps<SVGSVGElement>>;
  imgLocation?: 'right' | 'left';
  imgSize?: string;
  active?: boolean;
}

export const Button: FC<IButtonProps> = memo(props => {
  const {
    className,
    children,
    typeButton = 'primary',
    size = 'medium',
    fullWidth,
    text,
    isLoading,
    img,
    imgLocation = 'left',
    imgSize,
    active,
    ...otherProps
  } = props;

  const currentText = useCallback(
    (txt: string) =>
      txt.includes('pNFT') ? txt.toUpperCase().replaceAll('PNFT', 'pNFT') : txt,
    [],
  );

  const currentImgSize = useMemo(() => {
    if (imgSize) return { height: imgSize, width: imgSize };
    if (size.startsWith('large')) return { height: '18', width: '18' };
    if (size.startsWith('small')) return { height: '16', width: '16' };
    return { height: '24', width: '24' };
  }, [imgSize, size]);

  const currentClassName = useMemo(
    () =>
      classNames(
        cls.button,
        {
          [cls.fullWidth]: fullWidth,
          [cls.active]: active,
        },
        [className, cls[typeButton], cls[size], cls[imgLocation]],
      ),
    [active, className, fullWidth, imgLocation, size, typeButton],
  );

  return (
    <button type='button' className={currentClassName} {...otherProps}>
      {!!isLoading && <Spinner size={size === 'large' ? 24 : 20} />}
      {!!img && createElement(img, currentImgSize)}
      <p>{!!text && currentText(text)}</p>
      {children}
    </button>
  );
});
