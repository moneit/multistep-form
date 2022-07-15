import React from 'react';
import {IIconProps} from './types';
import {Icon} from './Icon';

export const UserIcon = (props: IIconProps) => (
  <Icon baseWidth={18.2} baseHeight={22.5} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 18.2 22.5">
        <g transform="translate(-3.5 -0.5)">
          <circle
            cx="5"
            cy="5"
            r="5"
            transform="translate(8 1)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
          <path
            d="M21.2,27.6A8.6,8.6,0,1,0,4,27.6Z"
            transform="translate(0 -5.1)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
        </g>
      </svg>
    )}
  </Icon>
);
