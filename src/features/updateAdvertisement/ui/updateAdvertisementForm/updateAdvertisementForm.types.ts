import type { AdvertisementForm } from '@/entities/advertisement/types';
import type { DefaultProps } from '@/shared/types';

export type UpdateAdvertisementFormProps = DefaultProps & {
  onSubmit?: VoidFunction;
  updatedAdvertisement: AdvertisementForm;
  advertisementId: string;
};
