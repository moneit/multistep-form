import React from 'react';
import {IIconProps} from './types';
import {Icon} from './Icon';

export const MoreVertIcon = (props: IIconProps) => (
  <Icon baseWidth={4.415} baseHeight={17.658} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 4.415 17.658">
        <path
          fill={color}
          d="M17.207,10.415A2.207,2.207,0,1,0,15,8.207,2.214,2.214,0,0,0,17.207,10.415Zm0,2.207a2.207,2.207,0,1,0,2.207,2.207A2.214,2.214,0,0,0,17.207,12.622Zm0,6.622a2.207,2.207,0,1,0,2.207,2.207A2.214,2.214,0,0,0,17.207,19.244Z"
          transform="translate(-15 -6)"
        />
      </svg>
    )}
  </Icon>
);
