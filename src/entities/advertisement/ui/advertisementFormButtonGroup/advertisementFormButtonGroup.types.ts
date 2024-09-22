import type { DefaultProps } from '@/shared/types';

export type AdvertisementFormButtonGroupProps = DefaultProps & {
  onCancel?: VoidFunction;
  onReset?: VoidFunction;
  isSubmitDisabled?: boolean;
  submitButtonText?: string;
};
