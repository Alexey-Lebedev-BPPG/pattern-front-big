import { CSSProperties, FC, memo } from 'react';
import cls from './Skeleton.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ISkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  border?: string;
}

export const Skeleton: FC<ISkeletonProps> = memo(
  ({ className, width, height, border }) => {
    const styles: CSSProperties = {
      borderRadius: border,
      height,
      width,
    };

    return (
      <div className={classNames(cls.skeleton, {}, [className])} style={styles}>
        <div />
      </div>
    );
  },
);
