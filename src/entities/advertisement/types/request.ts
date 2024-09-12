import type { AddAdvertisementForm, UpdateAdvertisementForm } from './form';
import type { AdvertisementsSearchParams } from './params';

export type AddAdvertisementRequest = AddAdvertisementForm;

export type UpdateAdvertisementRequest = UpdateAdvertisementForm & { advertisementId: string };

export type GetAdvertisementsRequest = AdvertisementsSearchParams;
