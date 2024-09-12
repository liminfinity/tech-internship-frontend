import type { BasePerPage } from '@/shared/constants';
import type { BaseSearchParams, CamelToSnakeCase } from '@/shared/types';
import type { OrderStatusKeys } from './order';

export type OrdersSearchParams = BaseSearchParams &
  Partial<{
    status: OrderStatusKeys;
    sort: number;
  }>;

export type OrderPerPage = BasePerPage;

export type OrdersSearchParamsSnakeCase = CamelToSnakeCase<keyof OrdersSearchParams>;
