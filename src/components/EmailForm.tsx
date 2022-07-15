import React, { useEffect, useState } from 'react';
import {
  IInput,
  Button,
  FormPanel,
  FormInput,
} from '@/components';
import { validators, checkFormValid } from '@/validators';
import { getFormData } from '@/helpers';

interface IEmailForm {
  email: IInput;
}

interface IEmailFormProps {
  visible: boolean;
  formData: any;
  onSubmit: (formData: any) => void;
  onClickNextStep: () => void;
}

export const EmailForm = ({
  visible,
  formData,
  onSubmit,
  onClickNextStep
}: IEmailFormProps) => {
  const [emailForm, setEmailForm] = useState<IEmailForm>(formData);
  const [formValid, setFormValid] = useState<boolean>(true);

  const onChange = (name: string, input: IInput) => {
    setEmailForm({
      ...emailForm,
      [name]: input,
    });
  };

  useEffect(() => {
    setFormValid(checkFormValid(emailForm));
    onSubmit(getFormData(emailForm));
  }, [emailForm]);

  return (
    <FormPanel visible={visible}>
      <FormInput
        name="email"
        label="Email"
        value={formData.email}
        onChange={(input: IInput) => onChange('email', input)}
        validators={[validators.required(), validators.email()]}
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
