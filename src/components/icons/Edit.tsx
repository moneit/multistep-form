import React from 'react';
import {IIconProps} from './types';
import {Icon} from './Icon';

export const EditIcon = (props: IIconProps) => (
  <Icon baseWidth={18.732} baseHeight={18.697} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 18.732 18.697">
        <path
          fill={color}
          d="M19.733,4.551a3.325,3.325,0,0,0-.98-2.367l-.227-.227a3.442,3.442,0,0,0-4.732,0L1.2,14.554a.66.66,0,0,0-.2.474v4.015a.669.669,0,0,0,.669.669H5.685a.674.674,0,0,0,.472-.2l12.6-12.6a3.319,3.319,0,0,0,.978-2.366ZM14.972,8.809,5.016,18.372H2.339V15.734l9.563-10,.474-.472,3.07,3.07ZM17.81,5.971l-1.42,1.42L13.322,4.322l.472-.474L14.74,2.9a1.994,1.994,0,0,1,1.418-.574,2.021,2.021,0,0,1,1.42.574l.229.227a2.012,2.012,0,0,1,0,2.841Z"
          transform="translate(-1.001 -1.014)"
        />
      </svg>
    )}
  </Icon>
);
