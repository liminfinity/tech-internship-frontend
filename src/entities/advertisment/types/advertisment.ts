import type { BaseEntity } from '@/shared/types';

export type Advertisment = BaseEntity & {
  /* Название. */
  name: string;
  /* Описание. */
  description?: string;
  /* Цена. */
  price: number;
  /* Дата и время создания. */
  createdAt: string;
  /* Количество просмотров. */
  views: number;
  /* Количество лайков. */
  likes: number;
  /* Ссылка на изображение. */
  imageUrl?: string;
};

export type ShortAdvertisment = Omit<Advertisment, 'description' | 'createdAt'>;