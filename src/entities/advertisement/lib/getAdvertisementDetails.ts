import type { Advertisement, AdvertisementDetails } from '../types';

export const getAdvertisementDetails = (advertisement: Advertisement): AdvertisementDetails => {
  const { likes, price, views, createdAt } = advertisement;

  return { likes, price, views, createdAt };
};
