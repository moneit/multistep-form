import React, { useState } from 'react';
import { ValidationError, ValidatorFn } from '@/validators';

type type = 'text' | 'password';

export interface IInput {
  value: string;
  valid: boolean;
}

interface IFormInput {
  name: string;
  label: string;
  type?: type;
  value: string;
  validators?: ValidatorFn[];
  onChange: ({ value, valid }: IInput) => void;
}

export const FormInput = ({
  name,
  type = 'text',
  label,
  value,
  validators,
  onChange,
}: IFormInput) => {
  const [err, setErr] = useState<ValidationError>(null);

  const handleChange = (e: any) => {
    const { value } = e.target;
    let isValid = true;
    if (validators) {
      let msg: ValidationError = '';
      for (const validator of validators) {
        msg = validator(value);
        if (msg) {
          isValid = false;
          break;
        }
      }
      setErr(msg);
    }

    onChange({ value, valid: isValid });
  };

  return (
    <div className="mb-2 flex">
      <label className="pt-1 text-right w-[100px]">{label}:</label>
      <div className="ml-3">
        <input
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          className="border px-2 py-1 w-[360px] outline-none"
        />
        {err && (
          <div className="text-danger text-xs">{err}</div>
        )}
      </div>
    </div>
  )
};
