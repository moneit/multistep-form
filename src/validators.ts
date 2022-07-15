export type ValidationError = string | null;
export type ValidatorFn = (value: any) => ValidationError;
export type ValidatorTemplateFn = (...props: any) => ValidatorFn;

export const validators: {
  [key: string]: ValidatorTemplateFn
} = {
  required: (field = 'This field') => (value: any) => {
    if (value === undefined || value === null || value === '' || (Array.isArray(value) && !value.length))
      return `${field} is required.`;
    return null;
  },
  email: (field = 'This field') => (value : any) => {
    if (!/^(([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+)?$/.test(value))
      return `${field} should be valid email.`;
    return null;
  },
  pattern: (regexp: any, field = 'This field') => (value: any) => {
    if (value && !regexp.test(value))
      return `${field} should be valid format.`;
    return null;
  },
};

export const checkFormValid = (form: any) => {
  let isValid = false;

  Object.keys(form).forEach((key) => {
    if (form[key].valid) {
      isValid = true;
    }
  });
  return isValid;
};
