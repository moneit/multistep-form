import React, { useState } from 'react';
import { saveAsJSON } from '@/helpers';
import {
  Step,
  EmailForm,
  BankDetailsForm,
  PasswordForm,
  ChooseCarModelForm,
  UploadCarImageForm,
  Success
} from '@/components';
import { stepHeaders } from '@/constants';

const initialForm = {
  emailSection: {
    email: '',
  },
  passwordSection: {
    password: '',
  },
  bankDetailsSection: {
    bankDetails: '',
  },
  carModelSection: {
    carModel: ''
  },
  carPictureSection: {
    carPicture: null,
  }
};

const Main = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedStep, setCompletedStep] = useState(1);

  const [form, setForm] = useState(initialForm);

  const goToStep = (step: number) => {
    if (step <= completedStep ) {
      setCurrentStep(step);
    }
  };

  const onSubmitSubForm = (field: string, data: any) => {
    setForm({
      ...form,
      [field]: data,
    });
  };

  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
    if (currentStep === completedStep) {
      setCompletedStep(completedStep + 1);
    }
  }

  const onSaveFormData = () => {
    saveAsJSON(form);
  };

  return (
    <div className="container py-4">
      <h1 className="mt-8 text-center text-6xl font-bold text-gray-500 mb-10">
        Multistep Form
      </h1>
      <div className="flex">
        {stepHeaders.map((step, index) => {
          const stepIndex = index + 1;
          return (
            <Step
              key={stepIndex}
              step={stepIndex}
              title={step.title}
              description={step.description}
              isCurrentStep={stepIndex === currentStep}
              completed={stepIndex < completedStep}
              onClick={() => goToStep(stepIndex)}
            />
          )
        })}
      </div>
      <div className="h-[400px] border px-40 py-8 bg-gray-50">
        <EmailForm
          visible={currentStep === 1}
          formData={form.emailSection}
          onSubmit={(subFormData: any) => onSubmitSubForm('emailSection', subFormData)}
          onClickNextStep={goToNextStep}
        />
        <PasswordForm
          visible={currentStep === 2}
          formData={form.passwordSection}
          onSubmit={(subFormData: any) => onSubmitSubForm('passwordSection', subFormData)}
          onClickNextStep={goToNextStep}
        />
        <BankDetailsForm
          visible={currentStep === 3}
          formData={form.bankDetailsSection}
          onSubmit={(subFormData: any) => onSubmitSubForm('bankDetailsSection', subFormData)}
          onClickNextStep={goToNextStep}
        />
        <ChooseCarModelForm
          visible={currentStep === 4}
          formData={form.carModelSection}
          onSubmit={(subFormData: any) => onSubmitSubForm('carModelSection', subFormData)}
          onClickNextStep={goToNextStep}
        />
        <UploadCarImageForm
          visible={currentStep === 5}
          formData={form.carPictureSection}
          onSubmit={(subFormData: any) => onSubmitSubForm('carPictureSection', subFormData)}
          onSaveFormData={onSaveFormData}
        />
        <Success visible={currentStep > 5} />
      </div>
    </div>
  )
};

export default Main;
