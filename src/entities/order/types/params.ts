import type { BasePerPage } from '@/shared/constants';
import type { BaseSearchParams, CamelToSnakeCase } from '@/shared/types';
import type { Order, OrderStatusKeys } from './order';

export type OrdersSort = Extract<keyof Order, 'total'> | 'default';

export type OrdersSearchParams = BaseSearchParams &
  Partial<{
    status: OrderStatusKeys | 'default';
    sort: OrdersSort;
  }>;

export type OrderPerPage = BasePerPage;

export type OrdersSearchParamsSnakeCase = CamelToSnakeCase<keyof OrdersSearchParams>;
