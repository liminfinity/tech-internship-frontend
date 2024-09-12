import { BASE_PER_PAGE } from '@/shared/constants';
import { type OrdersSearchParamsSnakeCase } from '../types';
import type { OrdersSort, OrdersSortLabel, OrderStatusLabel, OrderStatusValues } from '../types';

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

export const ORDER_SORT_BY = {
  'По умолчанию': 'default',
  'По стоимости': 'total',
} satisfies Record<OrdersSortLabel, OrdersSort>;

export const ORDERS_PER_PAGE = BASE_PER_PAGE;

export const PAGE_DEFAULT_VALUE = 1;

export const PER_PAGE_DEFAULT_VALUE = ORDERS_PER_PAGE[0];

export const SORT_DEFAULT_VALUE = ORDERS_SORT.DEFAULT;

export const STATUS_DEFAULT_VALUE = '';

export const ORDER_STATUS = {
  Created: 0,
  Paid: 1,
  Transport: 2,
  DeliveredToThePoint: 3,
  Received: 4,
  Archived: 5,
  Refund: 6,
} as const;

export const ORDER_STATUS_CODE = {
  '': 'По умолчанию',
  [ORDER_STATUS.Created]: 'Создан',
  [ORDER_STATUS.Paid]: 'Оплачен',
  [ORDER_STATUS.Transport]: 'В пути',
  [ORDER_STATUS.DeliveredToThePoint]: 'Доставлен',
  [ORDER_STATUS.Received]: 'Получен',
  [ORDER_STATUS.Archived]: 'Архивирован',
  [ORDER_STATUS.Refund]: 'Возврат',
} satisfies Record<OrderStatusValues | '', OrderStatusLabel>;

export const ORDER_STATUS_LABEL = {
  'По умолчанию': '',
  Создан: ORDER_STATUS.Created,
  Оплачен: ORDER_STATUS.Paid,
  'В пути': ORDER_STATUS.Transport,
  Доставлен: ORDER_STATUS.DeliveredToThePoint,
  Получен: ORDER_STATUS.Received,
  Архивирован: ORDER_STATUS.Archived,
  Возврат: ORDER_STATUS.Refund,
} as Record<OrderStatusLabel, OrderStatusValues | ''>;
