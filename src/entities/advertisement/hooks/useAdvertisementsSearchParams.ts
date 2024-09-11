import {
  ADVERTISEMENT_PER_PAGE,
  ADVERTISEMENTS_SEARCH_PARAMS,
  Q_DEFAULT_VALUE,
  PAGE_DEFAULT_VALUE,
  PER_PAGE_DEFAULT_VALUE,
} from '../constants';
import type {
  AdvertisementsSearchParamsSnakeCase,
  AdvertisementsSearchParams,
  AdvertisementPerPage,
} from '../types';
import { deleteAllEmptyFields, isInteger } from '@/shared/lib';
import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const getPageOrDefault = (searchPage: string) => {
  let page: number;
  if (isInteger(searchPage)) {
    page = +searchPage;
    if (page < PAGE_DEFAULT_VALUE) {
      page = PAGE_DEFAULT_VALUE;
    }
  } else {
    page = PAGE_DEFAULT_VALUE;
  }
  return page;
};

const getPerPageOrDefault = (searchPerPage: string) => {
  let perPage: AdvertisementPerPage;
  if (isInteger(searchPerPage)) {
    if (ADVERTISEMENT_PER_PAGE.includes(+searchPerPage as AdvertisementPerPage)) {
      perPage = +searchPerPage as AdvertisementPerPage;
    } else {
      perPage = PER_PAGE_DEFAULT_VALUE;
    }
  } else {
    perPage = PER_PAGE_DEFAULT_VALUE;
  }

  return perPage;
};

export const useAdvertisementsSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get(ADVERTISEMENTS_SEARCH_PARAMS.Q) ?? undefined;

  const page = getPageOrDefault(
    searchParams.get(ADVERTISEMENTS_SEARCH_PARAMS.PAGE) ?? PAGE_DEFAULT_VALUE.toString(),
  );

  const perPage = getPerPageOrDefault(
    searchParams.get(ADVERTISEMENTS_SEARCH_PARAMS.PER_PAGE) ?? PER_PAGE_DEFAULT_VALUE.toString(),
  );

  const formattedSearchParams: Partial<Record<AdvertisementsSearchParamsSnakeCase, string>> =
    useMemo(
      () => ({
        q: q === Q_DEFAULT_VALUE ? undefined : q,
        page: page === PAGE_DEFAULT_VALUE ? undefined : page.toString(),
        per_page: perPage === PER_PAGE_DEFAULT_VALUE ? undefined : perPage.toString(),
      }),
      [q, page, perPage],
    );

  const setAdvertisementsSearchParams = useCallback(
    ({ page, q, perPage }: AdvertisementsSearchParams) => {
      const newSearchParams = formattedSearchParams;
      deleteAllEmptyFields(newSearchParams);
      if (page) {
        if (page <= PAGE_DEFAULT_VALUE) {
          delete newSearchParams[ADVERTISEMENTS_SEARCH_PARAMS.PAGE];
        } else {
          newSearchParams[ADVERTISEMENTS_SEARCH_PARAMS.PAGE] = page.toString();
        }
      }
      if (q !== undefined) {
        if (q === Q_DEFAULT_VALUE) {
          delete newSearchParams[ADVERTISEMENTS_SEARCH_PARAMS.Q];
        } else {
          newSearchParams[ADVERTISEMENTS_SEARCH_PARAMS.Q] = q;
        }
      }
      if (perPage) {
        if (perPage === PER_PAGE_DEFAULT_VALUE) {
          delete newSearchParams[ADVERTISEMENTS_SEARCH_PARAMS.PER_PAGE];
        } else {
          newSearchParams[ADVERTISEMENTS_SEARCH_PARAMS.PER_PAGE] = perPage.toString();
        }
      }
      setSearchParams(newSearchParams);
    },
    [setSearchParams, formattedSearchParams],
  );

  return {
    q,
    page,
    perPage,
    setAdvertisementsSearchParams,
  };
};
