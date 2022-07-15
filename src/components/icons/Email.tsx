import React from 'react';
import {IIconProps} from './types';
import {Icon} from './Icon';

export const EmailIcon = (props: IIconProps) => (
  <Icon baseWidth={13} baseHeight={13} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 13 13">
        <path
          fill={color}
          d="M8,1.5a6.5,6.5,0,1,0,3.655,11.876.627.627,0,0,0-.354-1.148.638.638,0,0,0-.356.109A5.242,5.242,0,1,1,13.242,8v.419a1.049,1.049,0,0,1-2.1,0V5.9a.623.623,0,0,0-1.217-.2l-.092.273L9.6,5.81A2.7,2.7,0,0,0,8,5.274a2.726,2.726,0,1,0,2.037,4.518l.169-.193.155.2a2.288,2.288,0,0,0,1.832.923A2.311,2.311,0,0,0,14.5,8.419V8A6.508,6.508,0,0,0,8,1.5ZM8,9.468A1.468,1.468,0,1,1,9.468,8,1.47,1.47,0,0,1,8,9.468Z"
          transform="translate(-1.5 -1.5)"
        />
      </svg>
    )}
  </Icon>
);
