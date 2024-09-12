import type { z } from 'zod';
import type { Advertisement } from './advertisement';
import type { addAdvertisementSchema } from '../validation';

type AdvertisementForm = Pick<Advertisement, 'imageUrl' | 'description' | 'name' | 'price'>;

export type AddAdvertisementForm = z.infer<typeof addAdvertisementSchema>;

export type UpdateAdvertisementForm = AdvertisementForm;
