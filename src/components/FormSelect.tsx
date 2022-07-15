import React, { useState } from 'react';
import { ValidationError, ValidatorFn } from '@/validators';
import { IInput } from '@/components';

interface ISelect {
  text: string;
  value: string;
}

interface IFormSelectProps {
  label: string;
  data: ISelect[],
  value: string;
  onChange: ({ value, valid }: IInput) => void;
  validators?: ValidatorFn[];
}

export const FormSelect = ({
  label,
  data,
  value,
  onChange,
  validators,
}: IFormSelectProps) => {
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

    onChange({ value, valid: isValid});
  };

  return (
    <div className="mb-2 flex">
      <label className="pt-1">{label}</label>
      <div className="ml-3">
        <select
          value={value}
          onChange={handleChange}
          className="border px-2 py-1 w-[360px] outline-none"
        >
          <option>{''}</option>
          {data.map((item, index) => (
            <option
              key={index}
              value={item.value}
            >
              {item.text}
            </option>
          ))}
        </select>
        {err && (
          <div className="text-danger text-xs">{err}</div>
        )}
      </div>
    </div>
  )
};
