import React, { useEffect, useState } from 'react';
import {
  IInput,
  Button,
  FormPanel,
  FormInput,
} from '@/components';
import { checkFormValid, validators } from '@/validators';
import { getFormData } from '@/helpers';

interface IPasswordForm {
  password: string;
}

interface IEmailFormProps {
  visible: boolean;
  formData: any;
  onSubmit: (formData: any) => void;
  onClickNextStep: () => void;
}

export const PasswordForm = ({
  visible,
  formData,
  onSubmit,
  onClickNextStep,
}: IEmailFormProps) => {
  const [passwordForm, setPasswordForm] = useState<IPasswordForm>(formData);
  const [formValid, setFormValid] = useState<boolean>(true);

  const onChange = (name: string, input: IInput) => {
    setPasswordForm({
      ...passwordForm,
      [name]: input,
    });
  };

  useEffect(() => {
    setFormValid(checkFormValid(passwordForm));
    onSubmit(getFormData(passwordForm));
  }, [passwordForm]);

  return (
    <FormPanel visible={visible}>
      <FormInput
        name="password"
        label="Password"
        value={formData.password}
        onChange={(input: IInput) => onChange('password', input)}
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
