import type { BaseSearchParams } from '@/shared/types';

export type AdvertismentsSearchParams = BaseSearchParams &
  Partial<{
    name: string;
  }>;

export type AdvertismentParams = {
  advertismentId: string;
};
