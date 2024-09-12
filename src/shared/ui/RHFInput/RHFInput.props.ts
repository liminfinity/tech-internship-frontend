import type { InputProps } from 'antd';
import type { Path } from 'react-hook-form';

export type RHFInputProps<T> = InputProps & {
  name: Path<T>;
};
