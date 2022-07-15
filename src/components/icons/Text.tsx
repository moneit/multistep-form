import React from 'react';
import {IIconProps} from './types';
import {Icon} from './Icon';

export const TextIcon = (props: IIconProps) => (
  <Icon baseWidth={14} baseHeight={14} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 14 14">
        <g transform="translate(-1 -1)">
          <path
            fill={color}
            d="M8.45,4.78l3,6a.51.51,0,0,1-.23.67.522.522,0,0,1-.67-.22L9.64,9.41H6.35l-.9,1.81a.506.506,0,0,1-.68.22.5.5,0,0,1-.22-.67l3-6a.546.546,0,0,1,.9.01ZM8,6.12,6.74,8.63H9.26Z"
          />
          <path
            fill={color}
            d="M4,1h8a3.009,3.009,0,0,1,3,3v8a3.009,3.009,0,0,1-3,3H4a3.009,3.009,0,0,1-3-3V4A3.009,3.009,0,0,1,4,1ZM14,4a2.006,2.006,0,0,0-2-2H4A2.006,2.006,0,0,0,2,4v8a2.006,2.006,0,0,0,2,2h8a2.006,2.006,0,0,0,2-2Z"
          />
        </g>
      </svg>
    )}
  </Icon>
);
