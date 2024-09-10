import type { Advertisment } from './advertisment';

type AdvertismentForm = Pick<Advertisment, 'imageUrl' | 'description' | 'name' | 'price'>;

export type AddAdvertismentForm = AdvertismentForm;

export type UpdateAdvertismentForm = AdvertismentForm;
