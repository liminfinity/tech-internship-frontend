import type { AddAdvertisementForm, Advertisement } from '../types';

export const mapNewAdvertisement = (newAdverisement: AddAdvertisementForm) => {
  const mappedAdvertisement: Omit<Advertisement, 'id'> = {
    ...newAdverisement,
    views: 0,
    likes: 0,
    createdAt: new Date().toISOString(),
    imageUrl: newAdverisement?.imageUrl || '',
    description: newAdverisement?.description || '',
  };

  return mappedAdvertisement;
};
