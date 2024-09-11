import type { BasePerPage } from '@/shared/constants';
import type { BaseSearchParams, CamelToSnakeCase } from '@/shared/types';

export type AdvertisementsSearchParams = BaseSearchParams &
  Partial<{
    q: string;
  }>;

export type AdvertisementParams = {
  advertisementId: string;
};

export type AdvertisementPerPage = BasePerPage;

export type AdvertisementsSearchParamsSnakeCase = CamelToSnakeCase<
  keyof AdvertisementsSearchParams
>;
