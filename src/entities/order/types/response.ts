import type { PaginationResponse } from '@/shared/types';
import type { Order } from './order';

export type GetOrdersResponse = PaginationResponse & {
  data: Order[];
};

export type GetTransformedOrdersResponse = GetOrdersResponse & {
  totalCount: number;
};
