import React from 'react';
import { FormPanel } from '@/components';

interface ISuccessProps {
  visible: boolean;
}

export const Success = ({
  visible
}: ISuccessProps) => {
  return (
    <FormPanel visible={visible}>
      <div>Data saved successfully!</div>
    </FormPanel>
  )
};
