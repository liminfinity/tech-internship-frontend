import type { OrderPaginationProps } from './orderPagination.types';
import { Pagination, type PaginationProps } from 'antd';
import { useCallback } from 'react';
import {
  useGetOrdersQuery,
  useOrdersSearchParams,
  type OrderPerPage,
  ORDERS_PER_PAGE,
} from '@/entities/order';

export const OrderPagination = ({ className }: OrderPaginationProps) => {
  const { page, perPage, sort, status, setOrdersSearchParams } = useOrdersSearchParams();

  const { data: res } = useGetOrdersQuery({
    page,
    perPage,
    sort,
    status,
  });

  const handleShowSizeChange: Required<PaginationProps>['onShowSizeChange'] = useCallback(
    (_current, pageSize) => {
      setOrdersSearchParams({
        perPage: pageSize as OrderPerPage,
      });
    },
    [setOrdersSearchParams],
  );

  const handleChange: Required<PaginationProps>['onChange'] = useCallback(
    (page) => {
      setOrdersSearchParams({
        page,
      });
    },
    [setOrdersSearchParams],
  );

  if (!res) return null;

  const { items } = res;

  if (!items) return null;

  return (
    <Pagination
      showQuickJumper
      showSizeChanger
      total={items}
      current={page}
      onShowSizeChange={handleShowSizeChange}
      onChange={handleChange}
      pageSizeOptions={ORDERS_PER_PAGE}
      className={className}
    />
  );
};
