import React, { ReactElement, useMemo } from 'react';
import { color, iconDefaultColors, IIconProps } from './types';
import classnames from 'classnames';

export interface IAbstractIconProps extends IIconProps {
  baseWidth: number;
  baseHeight: number;
  color?: color[] | color;
  children(width: string, height: string, ...colors: string[]): ReactElement;
}

export const Icon = ({
  className = '',
  size,
  color = 'currentColor',
  baseWidth,
  baseHeight,
  children,
  ...props
}: IAbstractIconProps) => {
  const width = useMemo(() => size || baseWidth, [size, baseWidth]);
  const height = useMemo(() => width / baseWidth * baseHeight, [width, baseWidth, baseHeight]);
  const colors = useMemo(() => (
    (Array.isArray(color) ? color : [color]).map((col) => iconDefaultColors[col] ?? color)
  ), [color]);

  return (
    <div className={classnames('inline-flex', className)} {...props}>
      {children(`${width / 16}rem`, `${height / 16}rem`, ...colors)}
    </div>
  );
}
