import React, { useEffect, useState } from 'react';
import {
  Button,
  FormPanel,
  FormSelect, IInput,
} from '@/components';
import { checkFormValid, validators } from '@/validators';
import { getFormData } from '@/helpers';
import { carModels } from '@/constants';

interface ICarModelForm {
  carModel: string;
}

interface IChooseCarModelProps {
  visible: boolean;
  formData: any;
  onSubmit: (formData: any) => void;
  onClickNextStep: () => void;
}

export const ChooseCarModelForm = ({
  visible,
  formData,
  onSubmit,
  onClickNextStep,
}: IChooseCarModelProps) => {
  const [carModelForm, setCarModelForm] = useState<ICarModelForm>(formData);
  const [formValid, setFormValid] = useState<boolean>(true);

  const onChange = (name: string, input: IInput) => {
    setCarModelForm({
      ...carModelForm,
      [name]: input,
    });
  };

  useEffect(() => {
    setFormValid(checkFormValid(carModelForm));
    onSubmit(getFormData(carModelForm));
  }, [carModelForm]);

  return (
    <FormPanel visible={visible}>
      <FormSelect
        label="Car Model"
        data={carModels}
        value={formData.carModel}
        onChange={(input: IInput) => onChange('carModel', input)}
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
