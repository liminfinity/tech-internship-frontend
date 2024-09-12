import type { BasePerPage } from '@/shared/constants';
import type { BaseSearchParams, CamelToSnakeCase, Glthe } from '@/shared/types';

export type AdvertisementsSearchParams = BaseSearchParams &
  Partial<
    Glthe<'price' | 'views' | 'likes', number> & {
      name: string;
    }
  >;

export type AdvertisementParams = {
  advertisementId: string;
};

export type AdvertisementPerPage = BasePerPage;

export type AdvertisementsSearchParamsSnakeCase = CamelToSnakeCase<
  keyof AdvertisementsSearchParams
>;
