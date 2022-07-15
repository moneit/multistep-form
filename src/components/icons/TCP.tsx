import React from 'react';
import {IIconProps} from './types';
import {Icon} from './Icon';

export const TCPIcon = (props: IIconProps) => (
  <Icon baseWidth={91} baseHeight={36} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 182 72">
        <g transform="translate(-101 -14)">
          <text
            transform="translate(184 72)"
            fill="#313e4f"
            fontSize="54"
            fontFamily="SegoeUI-Bold, Segoe UI"
            fontWeight="700"
            letterSpacing="0.022em"
          >
            <tspan x="0" y="0">
              TCP
            </tspan>
          </text>
          <g transform="translate(101 20.006)">
            <circle
              cx="29.5"
              cy="29.5"
              r="29.5"
              transform="translate(0 -0.006)"
              fill="#03c2a9"
            />
            <g transform="translate(0 -0.007)">
              <g transform="translate(-20.89 -9.316)">
                <g transform="translate(0)">
                  <path
                    d="M-16119.126-9195.275s6.155,11.009,9.984,17.476,9.027,7.018,9.027,7.018h15.593"
                    transform="translate(16162.611 9195.275)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                  <path
                    d="M-16120.216-9195.531s5.2,10.1,9.122,16.181c2,3.111,5.819,7,9.76,7.708s23.248.481,23.248.481"
                    transform="translate(16159.592 9203.342)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                  <path
                    d="M-16119.543-9194.283s6.316,10.828,8.662,14.655,12.385,8.667,16.33,9.37"
                    transform="translate(16154.581 9209.809)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                  <path
                    d="M-16164.549-8997.6s7.525-13.273,9.469-18.037-.971-15.469-.971-15.469"
                    transform="translate(16199.587 9061.449)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                  <path
                    d="M-16206.918-8982.806s6.635-11.809,10.6-16.448c2.512-2.937,9.418-6.674,14.926-6.558s25.8,0,25.8,0"
                    transform="translate(16242.521 9045.478)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                  <path
                    d="M0,0A104.613,104.613,0,0,0,6.21,12.188C10.043,18.615,20,17.8,20,17.8l16.458.825"
                    transform="matrix(-0.454, 0.891, -0.891, -0.454, 76.857, 54.544)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                  <path
                    d="M0,0S5.243,11.385,9.076,17.813,22.013,24.8,22.013,24.8l18.179,1.155"
                    transform="matrix(-0.454, 0.891, -0.891, -0.454, 80.751, 47.248)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                  <path
                    d="M0,0S6.7,9.147,11.116,14.57s8.568,7.04,13.346,6.979,19.722-1.877,19.722-1.877"
                    transform="matrix(-0.407, -0.914, 0.914, -0.407, 26.507, 63.851)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                  <path
                    d="M0,0S6.6,9.387,11.018,14.811s5.584,6.978,10.361,6.917,22.716-2.1,22.716-2.1"
                    transform="matrix(-0.407, -0.914, 0.914, -0.407, 17.935, 63.647)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )}
  </Icon>
);
