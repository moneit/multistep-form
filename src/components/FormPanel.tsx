import React, { ReactNode, PropsWithChildren } from 'react';
import classnames from 'classnames';

interface IFormPanel {
  visible: boolean;
  children: ReactNode;
}

export const FormPanel = ({
  visible,
  children
}: PropsWithChildren<IFormPanel>) => {
  return (
    <div className={classnames(
      'h-full flex flex-col pt-6',
      !visible && 'hidden'
    )}>
      {children}
    </div>
  )
};
