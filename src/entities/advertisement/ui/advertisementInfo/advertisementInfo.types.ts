import type { DefaultProps } from '@/shared/types';
import type { Advertisement } from '../../types';

export type AdvertisementInfoProps = DefaultProps & {
  info: Pick<Advertisement, 'name' | 'imageUrl' | 'description'>;
};
