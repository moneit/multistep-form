import React from 'react';
import {IIconProps} from './types';
import {Icon} from './Icon';

export const ArrowRightIcon = (props: IIconProps) => (
  <Icon baseWidth={19.624} baseHeight={11.039} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 19.624 11.039">
        <path
          fill={color}
          d="M17.945,11.019a1.227,1.227,0,1,0,1.227-1.227A1.226,1.226,0,0,0,17.945,11.019Zm1.227,2.453a2.453,2.453,0,1,1,2.453-2.453A2.453,2.453,0,0,1,19.171,13.472ZM2,11.019a.613.613,0,0,1,.613-.613h9.558L8.312,6.547a.613.613,0,0,1,.867-.867l4.906,4.906a.613.613,0,0,1,0,.867L9.179,16.359a.613.613,0,0,1-.867-.867l3.859-3.859H2.613A.613.613,0,0,1,2,11.019Z"
          transform="translate(-2 -5.5)"
        />
      </svg>
    )}
  </Icon>
);
