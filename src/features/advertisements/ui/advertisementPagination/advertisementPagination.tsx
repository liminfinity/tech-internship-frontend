import {
  useAdvertisementsSearchParams,
  useGetAdvertisementsQuery,
  type AdvertisementPerPage,
  ADVERTISEMENT_PER_PAGE,
} from '@/entities/advertisement';
import type { AdvertisementPaginationProps } from './advertisementPagination.types';
import { Pagination, type PaginationProps } from 'antd';
import { useCallback } from 'react';

export const AdvertisementPagination = ({ className }: AdvertisementPaginationProps) => {
  const {
    name,
    page,
    perPage,
    likesGte,
    likesLte,
    viewsGte,
    viewsLte,
    priceGte,
    priceLte,
    setAdvertisementsSearchParams,
  } = useAdvertisementsSearchParams();

  const { data: res } = useGetAdvertisementsQuery({
    name,
    page,
    perPage,
    likesGte,
    likesLte,
    viewsGte,
    viewsLte,
    priceGte,
    priceLte,
  });

  const handleShowSizeChange: Required<PaginationProps>['onShowSizeChange'] = useCallback(
    (_current, pageSize) => {
      setAdvertisementsSearchParams({
        perPage: pageSize as AdvertisementPerPage,
      });
    },
    [setAdvertisementsSearchParams],
  );

  const handleChange: Required<PaginationProps>['onChange'] = useCallback(
    (page) => {
      setAdvertisementsSearchParams({
        page,
      });
    },
    [setAdvertisementsSearchParams],
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
      pageSizeOptions={ADVERTISEMENT_PER_PAGE}
      className={className}
    />
  );
};
