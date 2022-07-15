import React from 'react';
import {IIconProps} from './types';
import {Icon} from './Icon';

export const DropdownIcon = (props: IIconProps) => (
  <Icon baseWidth={14} baseHeight={14} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 14 14">
        <g transform="translate(-1 -1)">
          <path
            fill={color}
            d="M10.65,6.65a.5.5,0,1,1,.7.7l-3,3a.483.483,0,0,1-.7,0l-3-3a.5.5,0,1,1,.7-.7l2.3,2.29L8,9.29l.35-.35,2.3-2.29Z"
          />
          <path
            fill={color}
            d="M4,1h8a3.009,3.009,0,0,1,3,3v8a3.009,3.009,0,0,1-3,3H4a3.009,3.009,0,0,1-3-3V4A3.009,3.009,0,0,1,4,1Zm8,13a2.006,2.006,0,0,0,2-2V4a2.006,2.006,0,0,0-2-2H4A2.006,2.006,0,0,0,2,4v8a2.006,2.006,0,0,0,2,2Z"
            fillRule="evenodd"
          />
        </g>
      </svg>
    )}
  </Icon>
);
