import React, { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import { Button, FormPanel } from '@/components';

interface IUploadCarImageForm {
  carPicture: any;
}

interface IUploadCarImageFormProps {
  visible: boolean;
  formData: any;
  onSubmit: (formData: any) => void;
  onSaveFormData: (formData: any) => void;
}

export const UploadCarImageForm = ({
  visible,
  formData,
  onSubmit,
  onSaveFormData
}: IUploadCarImageFormProps) => {
  const [carImageForm, setCarImageForm] = useState<IUploadCarImageForm>(formData);

  const onSelectFiles = (name: string, image: any) => {
    setCarImageForm({
      ...carImageForm,
      [name]: URL.createObjectURL(image),
    });
  };

  useEffect(() => {
    onSubmit(carImageForm);
  }, [carImageForm]);

  return (
    <FormPanel visible={visible}>
      <Dropzone
        multiple={false}
        onDrop={acceptedFiles => onSelectFiles('carPicture', acceptedFiles[0])}
      >
        {({getRootProps, getInputProps}) => (
          <section className="border border-dashed border-primary cursor-pointer outline-none">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p className="p-3">Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
      {carImageForm.carPicture && (
        <img
          src={carImageForm.carPicture}
          alt={carImageForm.carPicture}
          className="m-auto max-w-100 max-h-40"
        />
      )}
      <Button
        className="mt-3 text-xl ml-auto mt-auto"
        color="primary"
        type="submit"
        onClick={onSaveFormData}
        disabled={!carImageForm.carPicture}
      >
        Submit
      </Button>
    </FormPanel>
  )
}
