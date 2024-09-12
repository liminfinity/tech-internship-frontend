import { Controller, useFormContext } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';
import type { RHFTextAreaProps } from './RHFTextArea.props';
import { Input } from 'antd';

const { TextArea } = Input;

export const RHFTextArea = <T extends FieldValues>({ name, ...props }: RHFTextAreaProps<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <TextArea {...field} {...props} />}
    />
  );
};
