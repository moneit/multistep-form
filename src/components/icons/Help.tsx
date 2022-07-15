import React from 'react';
import {IIconProps} from './types';
import {Icon} from './Icon';

export const HelpIcon = (props: IIconProps) => (
  <Icon baseWidth={31.9} baseHeight={31.9} {...props}>
    {(width, height, color) => (
      <svg width={height} height={height} viewBox="0 0 31.9 31.9">
        <g transform="translate(-8.2 -8.2)">
          <g transform="translate(8.2 8.2)">
            <path
              fill={color}
              transform="translate(169.8 269.8)"
              d="M-153.85-237.9a15.95,15.95,0,0,1-15.95-15.95,15.95,15.95,0,0,1,15.95-15.95,15.95,15.95,0,0,1,15.95,15.95,15.95,15.95,0,0,1-15.95,15.95Zm0-30.165a14.27,14.27,0,0,0-14.215,14.215,14.27,14.27,0,0,0,14.215,14.215,14.27,14.27,0,0,0,14.215-14.215,14.226,14.226,0,0,0-14.215-14.215Z"
            />
            <path
              fill={color}
              transform="translate(164.457 266.041)"
              d="M-153.445-255.163a4.791,4.791,0,0,1,1.068-1.8,5.219,5.219,0,0,1,1.735-1.135,6.346,6.346,0,0,1,2.336-.4,6.2,6.2,0,0,1,1.935.334,6.144,6.144,0,0,1,1.6.868,3.739,3.739,0,0,1,1.068,1.4,4.356,4.356,0,0,1,.4,1.935,4.343,4.343,0,0,1-.6,2.336,9.923,9.923,0,0,1-1.535,1.869l-1.2,1.2a2.529,2.529,0,0,0-.667.868,2.211,2.211,0,0,0-.267,1,7.719,7.719,0,0,0-.067,1.4h-1.535a5.022,5.022,0,0,1,.133-1.535,4.951,4.951,0,0,1,.467-1.4,6.772,6.772,0,0,1,.868-1.2c.4-.4.8-.8,1.335-1.268a4.568,4.568,0,0,0,1.135-1.4,3.233,3.233,0,0,0,.467-1.735,2.988,2.988,0,0,0-.267-1.335,6.048,6.048,0,0,0-.734-1.068,2.155,2.155,0,0,0-1.135-.667,4.314,4.314,0,0,0-1.335-.267,4.463,4.463,0,0,0-1.735.334,3.005,3.005,0,0,0-1.268.934,3.531,3.531,0,0,0-.734,1.4,4.234,4.234,0,0,0-.2,1.6h-1.535a4.957,4.957,0,0,1,.267-2.269Zm4,11.679h1.869v1.869h-1.869Z"
            />
          </g>
        </g>
      </svg>
    )}
  </Icon>
);