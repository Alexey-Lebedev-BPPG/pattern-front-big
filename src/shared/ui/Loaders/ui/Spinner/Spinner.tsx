import { FC, HTMLAttributes, memo, useMemo } from 'react';
import './spinner.scss';

interface ISpinnerProps extends HTMLAttributes<SVGElement> {
  color?: string;
  secondaryColor?: string;
  enabled?: boolean;
  size?: number | string;
  speed?: number;
  still?: boolean;
  thickness?: number;
}

export const Spinner: FC<ISpinnerProps> = memo(props => {
  const {
    color = '#282828',
    secondaryColor = '#FF7C01',
    speed = 100,
    still = false,
    thickness = 100,
    enabled = true,
    size = 72,
    style,
    ...svgProps
  } = props;

  const normalizeSize = useMemo(
    () =>
      parseFloat(size.toString()).toString() === size.toString()
        ? `${size}px`
        : size.toString(),
    [size],
  );

  const strokeWidth = useMemo(() => 4 * (thickness / 100), [thickness]);

  const circleStyle = useMemo(
    () =>
      still
        ? {}
        : {
            animation: `circular ${140 / speed}s linear infinite`,
          },
    [speed, still],
  );

  const currentStyle = {
    color,
    overflow: 'visible',
    width: normalizeSize,
    ...style,
  };

  if (!enabled) return null;
  return (
    <svg fill='none' {...svgProps} viewBox='0 0 66 66' style={currentStyle}>
      <circle
        cx='33'
        cy='33'
        fill='none'
        r='28'
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
      />
      <circle
        cx='33'
        cy='33'
        fill='none'
        r='28'
        stroke='currentColor'
        strokeDasharray='40, 134'
        strokeDashoffset='325'
        strokeLinecap='round'
        strokeWidth={strokeWidth}
        style={circleStyle}
      />
    </svg>
  );
});
