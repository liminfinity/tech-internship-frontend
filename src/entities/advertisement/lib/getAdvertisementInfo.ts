import type { Advertisement, AdvertisementInfo } from '../types';

export const getAdvertisementInfo = (advertisement: Advertisement): AdvertisementInfo => {
  const { name, imageUrl, description } = advertisement;
  return { name, imageUrl, description };
};
