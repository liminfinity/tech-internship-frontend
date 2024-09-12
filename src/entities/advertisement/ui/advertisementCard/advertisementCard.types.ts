import type { DefaultProps } from '@/shared/types';
import type { ShortAdvertisement } from '../../types';

export type AdvertisementCardProps = DefaultProps & {
  advertisement: ShortAdvertisement;
};
