import React from 'react';
import { Controller } from 'react-hook-form';

const FileInputController = ({
  name,
  control,
  handleFileChange,
}: {
  name: string;
  control: any;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <input
          type="file"
          onChange={(e) => {
            console.log(control);
            field.onChange(e);
            handleFileChange(e);
          }}
          accept=".txt"
        />
      )}
    />
  );
};

export default FileInputController;
