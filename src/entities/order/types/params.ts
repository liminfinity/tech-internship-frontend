import type { BasePerPage } from '@/shared/constants';
import type { BaseSearchParams, CamelToSnakeCase } from '@/shared/types';
import type { Order, OrderStatusValues } from './order';

export type OrdersSort = Extract<keyof Order, 'total'> | 'default';

export type OrdersSortLabel = 'По умолчанию' | 'По стоимости';

export type OrderStatusLabel =
  | 'По умолчанию'
  | 'Создан'
  | 'Оплачен'
  | 'В пути'
  | 'Доставлен'
  | 'Получен'
  | 'Архивирован'
  | 'Возврат';

export type OrdersSearchParams = BaseSearchParams &
  Partial<{
    status: OrderStatusValues | '';
    sort: OrdersSort;
  }>;

export type OrderPerPage = BasePerPage;

export type OrdersSearchParamsSnakeCase = CamelToSnakeCase<keyof OrdersSearchParams>;
