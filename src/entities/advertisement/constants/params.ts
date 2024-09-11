import { BASE_PER_PAGE } from '@/shared/constants';
import type { AdvertisementsSearchParamsSnakeCase } from '../types';

export const ADVERTISEMENTS_SEARCH_PARAMS = {
  NAME: 'name',
  PAGE: 'page',
  PER_PAGE: 'per_page',
} satisfies Record<
  Uppercase<AdvertisementsSearchParamsSnakeCase>,
  AdvertisementsSearchParamsSnakeCase
>;

export const ADVERTISEMENT_PER_PAGE = BASE_PER_PAGE;

export const PAGE_DEFAULT_VALUE = 1;

export const PER_PAGE_DEFAULT_VALUE = ADVERTISEMENT_PER_PAGE[0];

export const NAME_DEFAULT_VALUE = '';
