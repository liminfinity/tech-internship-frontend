import { z } from 'zod';
import { addAdvertisementSchema } from './addAdvertisement';

export const updateAdvertisementSchema = addAdvertisementSchema.extend({
  name: z.string().optional(),
  price: z.number().optional(),
});
