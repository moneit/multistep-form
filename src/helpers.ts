// @ts-ignore
import { saveAs } from 'file-saver';

export const saveAsJSON = (data: any) => {
  const blob = new Blob([JSON.stringify(data)], {type: "text/plain;charset=utf-8"});
  saveAs(blob, 'data.json');
}

export const getFormData = (form: any) => {
  const data: any = {};
  Object.keys(form).forEach((key) => {
    // @ts-ignore
    data[key] = form[key].value;
  });

  return data;
}
