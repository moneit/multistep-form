import React, { useEffect, useState } from 'react';
import {
  Button,
  FormPanel,
  FormInput, IInput,
} from '@/components';
import { checkFormValid, validators } from '@/validators';
import { getFormData } from '@/helpers';

interface IBankDetailsForm {
  bankDetails: string;
}

interface IBankDetailsProps {
  visible: boolean;
  formData: any;
  onSubmit: (formData: any) => void;
  onClickNextStep: () => void;
}

export const BankDetailsForm = ({
  visible,
  formData,
  onSubmit,
  onClickNextStep,
}: IBankDetailsProps) => {
  const [bankDetailsForm, setBankDetailsForm] = useState<IBankDetailsForm>(formData);
  const [formValid, setFormValid] = useState<boolean>(true);

  const onChange = (name: string, input: IInput) => {
    setBankDetailsForm({
      ...bankDetailsForm,
      [name]: input,
    });
  };

  useEffect(() => {
    setFormValid(checkFormValid(bankDetailsForm));
    onSubmit(getFormData(bankDetailsForm));
  }, [bankDetailsForm]);

  return (
    <FormPanel visible={visible}>
      <FormInput
        name="bankDetails"
        label="Bank Details"
        value={formData.bankDetails}
        onChange={(input: IInput) => onChange('bankDetails', input)}
        validators={[validators.required()]}
      />
      <Button
        className="mt-3 text-xl ml-auto mt-auto"
        color="primary"
        onClick={onClickNextStep}
        disabled={!formValid}
      >
        Next
      </Button>
    </FormPanel>
  )
}
