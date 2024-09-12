import type { PaginationResponse } from '@/shared/types';
import type { Advertisement, ShortAdvertisement } from './advertisement';

export type GetAdvertisementsResponse = PaginationResponse & {
  data: ShortAdvertisement[];
};

export type GetAdvertisementResponse = Advertisement;

export type AddAdvertisementResponse = Pick<Advertisement, 'id'>;
