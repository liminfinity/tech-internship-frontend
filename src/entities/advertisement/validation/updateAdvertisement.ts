import { z } from 'zod';
import { addAdvertisementSchema } from './addAdvertisement';

export const updateAdvertisementSchema = addAdvertisementSchema.extend({
  name: z.string().optional(),
  price: z.number().optional(),
  imageUrl: z.union([z.string().url('Некорректная ссылка'), z.string().min(0).max(0)]).optional(),
});
