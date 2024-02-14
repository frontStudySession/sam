import React, { useState } from 'react';
import { useForm, Resolver, SubmitHandler, Controller } from 'react-hook-form';
import { FormData } from '@app/types';
import styled from 'styled-components';

const resolver: Resolver<FormData> = async (values) => {
  let errors = {};

  if (!values.firstName || values.firstName.length < 1) {
    errors = {
      ...errors,
      firstName: {
        type: 'required',
      },
    };
  }

  if (!values.lastName || values.lastName.length < 1) {
    errors = {
      ...errors,
      lastName: {
        type: 'required',
      },
    };
  }

  if (
    !values.email ||
    !/^[A-z0-9]{2,20}@[A-z]{2,20}\.[a-z]{2,3}$/.test(values.email)
  ) {
    errors = {
      ...errors,
      email: {
        type: 'required',
      },
    };
  }

  if (
    !values.mobileNumber ||
    !/^[0-9]{11}$/.test(values.mobileNumber) ||
    values.mobileNumber.length > 11
  ) {
    errors = {
      ...errors,
      mobileNumber: {
        type: 'required',
      },
    };
  }

  return {
    values: Object.keys(errors).length ? {} : values,
    errors,
  };
};

export const FormComp = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver });
  const onSubmit: SubmitHandler<FormData> = (data) => console.log('data', data);

  const [text, setText] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setText(content);
      };
      reader.readAsText(file);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        $error={Boolean(errors?.firstName)}
        placeholder="First Name"
        {...register('firstName')}
      />

      <Input
        $error={Boolean(errors?.lastName)}
        placeholder="Last Name"
        {...register('lastName')}
      />

      <Input
        $error={Boolean(errors?.email)}
        placeholder="Email"
        type="email"
        {...register('email')}
      />

      <Input
        $error={Boolean(errors?.mobileNumber)}
        placeholder="Mobile Number"
        type="tel"
        {...register('mobileNumber')}
      />

      <Select {...register('title', { required: true })}>
        <option value="">Select...</option>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </Select>

      <LabelBox>
        <label>
          <input
            type="radio"
            value="Yes"
            {...register('developer', { required: true })}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="No"
            {...register('developer', { required: true })}
          />
          No
        </label>
      </LabelBox>

      <Controller
        name="file"
        control={control}
        render={({ field }) => (
          <Input
            type="file"
            onChange={(e) => {
              field.onChange(e);
              handleFileChange(e);
            }}
            accept=".txt"
          />
        )}
      />

      <TextPreview>{text}</TextPreview>

      <Input type="submit" />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 600px;
`;

const LabelBox = styled.div`
  display: flex;
  gap: 30px;
`;

const Input = styled.input<{ $error?: boolean }>`
  padding: 6px 10px;
  border-radius: 4px;
  background-color: ${(props) => (props.$error ? 'pink' : 'white')};
  transition: background-color 0.2s ease-in;
`;

const Select = styled.select`
  padding: 6px 10px;
  border-radius: 4px;
`;

const TextPreview = styled.div`
  padding: 6px 10px;
  border-radius: 4px;
  background-color: #f5f5f5;
`;
