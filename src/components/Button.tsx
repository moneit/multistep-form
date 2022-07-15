import React, {
  MouseEventHandler,
  PropsWithChildren,
  ReactElement,
  useMemo
} from 'react';
import classnames from 'classnames';

type ButtonVariant = 'standard' | 'outline';
type ButtonColor = 'default' | 'primary' | 'primary-o' | 'secondary' | 'gray';
type ButtonShape = 'standard' | 'icon';

export interface IButtonProps {
  variant?: ButtonVariant;
  color?: ButtonColor;
  className?: string;
  shape?: ButtonShape;
  leftIcon?: ReactElement;
  leftIconClass?: string;
  rightIcon?: ReactElement;
  rightIconClass?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const Button = ({
   children,
   className = '',
   variant = 'standard',
   color = 'default',
   shape = 'standard',
   leftIcon,
   leftIconClass = '',
   rightIcon,
   rightIconClass = '',
   type = 'button',
   disabled,
   ...props
}: PropsWithChildren<IButtonProps>) => {
  const buttonTheme = useMemo(() => {
    const classes: string[] = [];
    if (color !== 'default') {
      classes.push('border');
    }
    switch (color) {
      case 'primary':
        if (variant === 'standard') {
          classes.push('bg-primary text-white border-primary');
        } else {
          classes.push('text-primary border-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white');
        }
        break;

      case 'primary-o':
        if (variant === 'standard') {
          classes.push('bg-primary bg-opacity-24 text-primary border-transparent hover:bg-opacity-12');
        } else {
          classes.push('text-primary border-primary hover:bg-primary bg-opacity-24 hover:text-white');
        }
        break;

      case 'secondary':
        if (variant === 'standard') {
          classes.push('bg-secondary text-white border-secondary');
        } else {
          classes.push('text-secondary border-secondary hover:bg-secondary hover:text-white focus:bg-secondary focus:text-white');
        }
        break;

      case 'gray':
        if (variant === 'standard') {
          classes.push('bg-gray-500 text-white border-gray-500');
        } else {
          classes.push('text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white');
        }
        break;
    }

    return classes;
  }, [variant, color]);

  return (
    <button
      className={classnames(
        'flex flex-center outline-none px-8 py-1 rounded transition-all text-sm',
        buttonTheme,
        className,
        { 'opacity-60': disabled }
      )}
      type={type}
      disabled={disabled}
      {...props}
    >
      {
        !!leftIcon && (
          <div className={classnames(
            'flex-shrink-0 flex items-center',
            { 'mr-2': shape !== 'icon' },
            leftIconClass
          )}>{leftIcon}</div>
        )
      }
      { children }
      {
        !!rightIcon && (
          <div className={classnames(
            'flex-shrink-0 flex items-center',
            { 'ml-2': shape !== 'icon' },
            rightIconClass
          )}>{rightIcon}</div>
        )
      }
    </button>
  );
};
