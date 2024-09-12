import { z } from 'zod';

export const addAdvertisementSchema = z.object({
  imageUrl: z.string().url('Некорректная ссылка').optional(),
  name: z.string(),
  price: z.number(),
  description: z.string().optional(),
});
