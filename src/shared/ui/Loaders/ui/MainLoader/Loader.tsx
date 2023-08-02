import { FC, memo } from 'react';
import cls from './Loader.module.scss';
import { Icon } from '../../../Icon';
import logo from '@/shared/assets/svg/logo.svg';

interface ILoaderProps {
  text?: string;
}

export const Loader: FC<ILoaderProps> = memo(({ text }) => (
  <div className={cls.page}>
    <div className={cls.loader}>
      <div className={cls.content}>
        <Icon Svg={logo} />
        <div className={cls.progress} />
        <p>{text}</p>
      </div>
    </div>
  </div>
));
