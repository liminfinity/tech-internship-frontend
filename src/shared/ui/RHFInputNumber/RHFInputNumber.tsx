import { Controller, useFormContext } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';
import type { RHFInputNumberProps } from './RHFInputNumber.props';
import { InputNumber } from 'antd';

export const RHFInputNumber = <T extends FieldValues>({
  name,
  ...props
}: RHFInputNumberProps<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <InputNumber {...field} {...props} />}
    />
  );
};
