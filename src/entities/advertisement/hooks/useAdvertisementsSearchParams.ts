import {
  ADVERTISEMENT_PER_PAGE,
  ADVERTISEMENTS_SEARCH_PARAMS,
  PAGE_DEFAULT_VALUE,
  PER_PAGE_DEFAULT_VALUE,
  NAME_DEFAULT_VALUE,
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

  const name = searchParams.get(ADVERTISEMENTS_SEARCH_PARAMS.NAME) ?? undefined;

  const page = getPageOrDefault(
    searchParams.get(ADVERTISEMENTS_SEARCH_PARAMS.PAGE) ?? PAGE_DEFAULT_VALUE.toString(),
  );

  const perPage = getPerPageOrDefault(
    searchParams.get(ADVERTISEMENTS_SEARCH_PARAMS.PER_PAGE) ?? PER_PAGE_DEFAULT_VALUE.toString(),
  );

  const formattedSearchParams: Partial<Record<AdvertisementsSearchParamsSnakeCase, string>> =
    useMemo(
      () => ({
        name: name === NAME_DEFAULT_VALUE ? undefined : name,
        page: page === PAGE_DEFAULT_VALUE ? undefined : page.toString(),
        per_page: perPage === PER_PAGE_DEFAULT_VALUE ? undefined : perPage.toString(),
      }),
      [name, page, perPage],
    );

  const setAdvertisementsSearchParams = useCallback(
    ({ page, name, perPage }: AdvertisementsSearchParams) => {
      const newSearchParams = formattedSearchParams;
      deleteAllEmptyFields(newSearchParams);
      if (page) {
        if (page <= PAGE_DEFAULT_VALUE) {
          delete newSearchParams[ADVERTISEMENTS_SEARCH_PARAMS.PAGE];
        } else {
          newSearchParams[ADVERTISEMENTS_SEARCH_PARAMS.PAGE] = page.toString();
        }
      }
      if (name !== undefined) {
        if (name === NAME_DEFAULT_VALUE) {
          delete newSearchParams[ADVERTISEMENTS_SEARCH_PARAMS.NAME];
        } else {
          newSearchParams[ADVERTISEMENTS_SEARCH_PARAMS.NAME] = name;
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
    name,
    page,
    perPage,
    setAdvertisementsSearchParams,
  };
};
