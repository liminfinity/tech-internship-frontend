import type { DefaultProps } from '@/shared/types';
import type { AdvertisementDetails } from '../../types';

export type AdvertisementDetailsProps = DefaultProps & {
  details: AdvertisementDetails;
};
