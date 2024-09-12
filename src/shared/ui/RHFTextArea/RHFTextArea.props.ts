import type { TextAreaProps } from 'antd/es/input';
import type { Path } from 'react-hook-form';

export type RHFTextAreaProps<T> = TextAreaProps & {
  name: Path<T>;
};
