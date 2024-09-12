import {
  ORDERS_PER_PAGE,
  ORDERS_SEARCH_PARAMS,
  ORDERS_SORT,
  PAGE_DEFAULT_VALUE,
  PER_PAGE_DEFAULT_VALUE,
  SORT_DEFAULT_VALUE,
  STATUS_DEFAULT_VALUE,
  ORDER_STATUS,
} from '../constants';
import {
  type OrderPerPage,
  type OrdersSearchParamsSnakeCase,
  type OrdersSearchParams,
  type OrdersSort,
  type OrderStatusValues,
} from '../types';
import { deleteAllEmptyFields, isInteger } from '@/shared/lib';
import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const getNumberOrDefault = (searchNum: string, defaultValue: number) => {
  let num: number;
  if (isInteger(searchNum)) {
    num = +searchNum;
    if (num < defaultValue) {
      num = defaultValue;
    }
  } else {
    num = defaultValue;
  }
  return num;
};

const getPerPageOrDefault = (searchPerPage: string) => {
  let perPage: OrderPerPage;
  if (isInteger(searchPerPage)) {
    if (ORDERS_PER_PAGE.includes(+searchPerPage as OrderPerPage)) {
      perPage = +searchPerPage as OrderPerPage;
    } else {
      perPage = PER_PAGE_DEFAULT_VALUE;
    }
  } else {
    perPage = PER_PAGE_DEFAULT_VALUE;
  }

  return perPage;
};

const SORT_BY = Object.values(ORDERS_SORT);

const getSortOrDefault = (searchSort: string) => {
  let sort: OrdersSort;
  if (SORT_BY.includes(searchSort as OrdersSort)) {
    sort = searchSort as OrdersSort;
  } else {
    sort = SORT_DEFAULT_VALUE;
  }
  return sort;
};

const STATUSES = Object.values(ORDER_STATUS);

const getStatusOrDefault = (searchStatus: string) => {
  let status: OrdersSearchParams['status'];
  if (searchStatus !== STATUS_DEFAULT_VALUE) {
    if (STATUSES.includes(+searchStatus as OrderStatusValues)) {
      status = +searchStatus as OrderStatusValues;
    } else {
      status = STATUS_DEFAULT_VALUE;
    }
  } else {
    status = STATUS_DEFAULT_VALUE;
  }

  return status;
};

export const useOrdersSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = getNumberOrDefault(
    searchParams.get(ORDERS_SEARCH_PARAMS.PAGE) ?? PAGE_DEFAULT_VALUE.toString(),
    PAGE_DEFAULT_VALUE,
  );

  const perPage = getPerPageOrDefault(
    searchParams.get(ORDERS_SEARCH_PARAMS.PER_PAGE) ?? PER_PAGE_DEFAULT_VALUE.toString(),
  );

  const sort = getSortOrDefault(searchParams.get(ORDERS_SEARCH_PARAMS.SORT) ?? ORDERS_SORT.DEFAULT);

  const status = getStatusOrDefault(
    searchParams.get(ORDERS_SEARCH_PARAMS.STATUS) ?? STATUS_DEFAULT_VALUE,
  );

  const formattedSearchParams: Partial<Record<OrdersSearchParamsSnakeCase, string>> = useMemo(
    () => ({
      page: page === PAGE_DEFAULT_VALUE ? undefined : page.toString(),
      per_page: perPage === PER_PAGE_DEFAULT_VALUE ? undefined : perPage.toString(),
      sort: sort === SORT_DEFAULT_VALUE ? undefined : sort.toString(),
      status: status === STATUS_DEFAULT_VALUE ? undefined : status.toString(),
    }),
    [page, perPage, sort, status],
  );

  const setOrdersSearchParams = useCallback(
    ({ page, perPage, sort, status }: OrdersSearchParams) => {
      const newSearchParams = formattedSearchParams;
      deleteAllEmptyFields(newSearchParams);
      if (page) {
        if (page <= PAGE_DEFAULT_VALUE) {
          delete newSearchParams[ORDERS_SEARCH_PARAMS.PAGE];
        } else {
          newSearchParams[ORDERS_SEARCH_PARAMS.PAGE] = page.toString();
        }
      }
      if (perPage) {
        if (perPage === PER_PAGE_DEFAULT_VALUE) {
          delete newSearchParams[ORDERS_SEARCH_PARAMS.PER_PAGE];
        } else {
          newSearchParams[ORDERS_SEARCH_PARAMS.PER_PAGE] = perPage.toString();
        }
      }
      if (sort) {
        if (sort === SORT_DEFAULT_VALUE) {
          delete newSearchParams[ORDERS_SEARCH_PARAMS.SORT];
        } else {
          newSearchParams[ORDERS_SEARCH_PARAMS.SORT] = sort.toString();
        }
      }
      if (status !== undefined) {
        if (status === STATUS_DEFAULT_VALUE) {
          delete newSearchParams[ORDERS_SEARCH_PARAMS.STATUS];
        } else {
          newSearchParams[ORDERS_SEARCH_PARAMS.STATUS] = status.toString();
        }
      }
      setSearchParams(newSearchParams);
    },
    [setSearchParams, formattedSearchParams],
  );

  return {
    page,
    perPage,
    sort,
    status,
    setOrdersSearchParams,
  };
};
