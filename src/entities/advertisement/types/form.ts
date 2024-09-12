import type { Advertisement } from './advertisement';

type AdvertisementForm = Pick<Advertisement, 'imageUrl' | 'description' | 'name' | 'price'>;

export type AddAdvertisementForm = AdvertisementForm;

export type UpdateAdvertisementForm = AdvertisementForm;
