import type { DefaultProps } from '@/shared/types';
import type { ShortAdvertisment } from '../../types';

export type AdvertismentCardProps = DefaultProps & {
  advertisment: ShortAdvertisment;
};
