import type { BaseEntity } from '@/shared/types';

export type Advertisement = BaseEntity & {
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

export type ShortAdvertisement = Omit<Advertisement, 'description' | 'createdAt'>;

export type AdvertisementInfo = Pick<Advertisement, 'name' | 'imageUrl' | 'description'>;

export type AdvertisementDetails = Pick<Advertisement, 'price' | 'views' | 'likes' | 'createdAt'>;
