import type { z } from 'zod';
import type { addAdvertisementSchema, updateAdvertisementSchema } from '../validation';

export type AddAdvertisementForm = z.infer<typeof addAdvertisementSchema>;

export type UpdateAdvertisementForm = z.infer<typeof updateAdvertisementSchema>;

export type AdvertisementForm = AddAdvertisementForm | UpdateAdvertisementForm;
