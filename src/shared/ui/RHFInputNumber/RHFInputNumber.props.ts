import type { InputNumberProps } from 'antd';
import type { Path } from 'react-hook-form';

export type RHFInputNumberProps<T> = InputNumberProps & {
  name: Path<T>;
};
