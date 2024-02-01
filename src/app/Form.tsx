import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

type FormData = {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  developer: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="First Name"
        {...register('firstName', { required: true, minLength: 1 })}
      />

      <Input
        placeholder="Last Name"
        {...register('lastName', { required: true, minLength: 1 })}
      />

      <Input
        placeholder="Email"
        type="email"
        {...register('email', {
          required: true,
          pattern: /^[A-z0-9]{2,20}@[A-z]{2,20}\.[a-z]{2,3}$/,
        })}
      />

      <Input
        placeholder="Mobile Number"
        type="tel"
        {...register('mobileNumber', {
          required: true,
          pattern: /^[0-9]{11}$/,
          minLength: 11,
        })}
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

      <input type="submit" />
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LabelBox = styled.div`
  display: flex;
  gap: 20px;
`;

const Input = styled.input`
  padding: 6px 10px;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 6px 10px;
  border-radius: 4px;
`;
