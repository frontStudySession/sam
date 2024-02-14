import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { FormData } from '@app/types';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import styled from 'styled-components';

const phoneRegex = /^[0-9]{11}$/;

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  mobileNumber: z.string().regex(phoneRegex).min(11),
  developer: z.string().min(1),
});

export const FormComp = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit: SubmitHandler<FormData> = (data) => console.log('data', data);

  const [text, setText] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        const content = (e.target?.result as string) || 'file empty';
        setText(content);
      };
    }
  };

  const Preview = () => {
    if (text) return <TextPreview>{text}</TextPreview>;
    return null;
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
              console.log('control', control);
              field.onChange(e);
              handleFileChange(e);
            }}
            accept=".txt"
          />
        )}
      />

      <Preview />

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
