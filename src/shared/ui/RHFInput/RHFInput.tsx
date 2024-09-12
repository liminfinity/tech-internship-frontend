import { Controller, useFormContext } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';
import type { RHFInputProps } from './RHFInput.props';
import { Input } from 'antd';

export const RHFInput = <T extends FieldValues>({ name, ...props }: RHFInputProps<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <Input {...field} {...props} />}
    />
  );
};
