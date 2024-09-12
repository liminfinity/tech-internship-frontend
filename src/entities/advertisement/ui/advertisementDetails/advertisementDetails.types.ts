import type { DefaultProps } from '@/shared/types';
import type { Advertisement } from '../../types';

export type AdvertisementDetailsProps = DefaultProps & {
  details: Pick<Advertisement, 'price' | 'views' | 'likes' | 'createdAt'>;
};
