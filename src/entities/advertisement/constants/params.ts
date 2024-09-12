import { BASE_PER_PAGE } from '@/shared/constants';
import type { AdvertisementsSearchParamsSnakeCase } from '../types';

export const ADVERTISEMENTS_SEARCH_PARAMS = {
  NAME: 'name',
  PAGE: 'page',
  PER_PAGE: 'per_page',
  PRICE_LTE: 'price_lte',
  PRICE_GTE: 'price_gte',
  VIEWS_LTE: 'views_lte',
  VIEWS_GTE: 'views_gte',
  LIKES_LTE: 'likes_lte',
  LIKES_GTE: 'likes_gte',
} satisfies Record<
  Uppercase<AdvertisementsSearchParamsSnakeCase>,
  AdvertisementsSearchParamsSnakeCase
>;

export const ADVERTISEMENT_PER_PAGE = BASE_PER_PAGE;

export const PAGE_DEFAULT_VALUE = 1;

export const PER_PAGE_DEFAULT_VALUE = ADVERTISEMENT_PER_PAGE[0];

export const NAME_DEFAULT_VALUE = '';

export const PRICE_LTE_DEFAULT_VALUE = 999_999_999;

export const PRICE_GTE_DEFAULT_VALUE = 0;

export const VIEWS_LTE_DEFAULT_VALUE = 999_999_999;

export const VIEWS_GTE_DEFAULT_VALUE = 0;

export const LIKES_LTE_DEFAULT_VALUE = 999_999_999;

export const LIKES_GTE_DEFAULT_VALUE = 0;
