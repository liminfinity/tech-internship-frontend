import { BASE_PER_PAGE } from '@/shared/constants';
import { type OrdersSearchParamsSnakeCase } from '../types';
import type { OrdersSort } from '../types';

export const ORDERS_SORT = {
  TOTAL: 'total',
  DEFAULT: 'default',
} satisfies Record<Uppercase<OrdersSort>, OrdersSort>;

export const ORDERS_SEARCH_PARAMS = {
  STATUS: 'status',
  SORT: 'sort',
  PAGE: 'page',
  PER_PAGE: 'per_page',
} satisfies Record<Uppercase<OrdersSearchParamsSnakeCase>, OrdersSearchParamsSnakeCase>;

export const ORDERS_PER_PAGE = BASE_PER_PAGE;

export const PAGE_DEFAULT_VALUE = 1;

export const PER_PAGE_DEFAULT_VALUE = ORDERS_PER_PAGE[0];

export const SORT_DEFAULT_VALUE = ORDERS_SORT.DEFAULT;

export const STATUS_DEFAULT_VALUE = undefined;
