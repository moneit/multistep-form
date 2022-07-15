import {ReactEventHandler} from 'react';

export interface IIconProps {
  className?: string;
  size?: number;
  color?: color | color[];
  onClick?: ReactEventHandler;
}

export type color = 'white' | 'black' | 'text' | 'primary' | 'info' | 'success' | 'danger' | 'blue' | 'blue-light' | 'blue-dark' | string;

export const iconDefaultColors: {
  [key: string]: string,
 } = {
  white: '#FFF',
  black: '#000',
  text: '#424242',
  primary: '#F6A734',
  info: '#2FB4DD',
  success: '#A3CE5E',
  danger: '#D23629',
  blue: '#307CD8',
  'blue-light': '#2680EB',
  'blue-dark': '#0B1C34',
};
