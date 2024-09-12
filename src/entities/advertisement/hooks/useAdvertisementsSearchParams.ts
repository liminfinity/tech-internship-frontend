import {
  ADVERTISEMENT_PER_PAGE,
  ADVERTISEMENTS_SEARCH_PARAMS,
  PAGE_DEFAULT_VALUE,
  PER_PAGE_DEFAULT_VALUE,
  NAME_DEFAULT_VALUE,
  PRICE_GTE_DEFAULT_VALUE,
  PRICE_LTE_DEFAULT_VALUE,
  VIEWS_GTE_DEFAULT_VALUE,
  VIEWS_LTE_DEFAULT_VALUE,
  LIKES_GTE_DEFAULT_VALUE,
  LIKES_LTE_DEFAULT_VALUE,
} from '../constants';
import type {
  AdvertisementsSearchParamsSnakeCase,
  AdvertisementsSearchParams,
  AdvertisementPerPage,
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

  const page = getNumberOrDefault(
    searchParams.get(ADVERTISEMENTS_SEARCH_PARAMS.PAGE) ?? PAGE_DEFAULT_VALUE.toString(),
    PAGE_DEFAULT_VALUE,
  );

  const perPage = getPerPageOrDefault(
    searchParams.get(ADVERTISEMENTS_SEARCH_PARAMS.PER_PAGE) ?? PER_PAGE_DEFAULT_VALUE.toString(),
  );

  const priceGte = getNumberOrDefault(
    searchParams.get(ADVERTISEMENTS_SEARCH_PARAMS.PRICE_GTE) ?? PRICE_GTE_DEFAULT_VALUE.toString(),
    PRICE_GTE_DEFAULT_VALUE,
  );

  const priceLte = getNumberOrDefault(
    searchParams.get(ADVERTISEMENTS_SEARCH_PARAMS.PRICE_LTE) ?? PRICE_LTE_DEFAULT_VALUE.toString(),
    PRICE_LTE_DEFAULT_VALUE,
  );

  const viewsGte = getNumberOrDefault(
    searchParams.get(ADVERTISEMENTS_SEARCH_PARAMS.VIEWS_GTE) ?? VIEWS_GTE_DEFAULT_VALUE.toString(),
    VIEWS_GTE_DEFAULT_VALUE,
  );

  const viewsLte = getNumberOrDefault(
    searchParams.get(ADVERTISEMENTS_SEARCH_PARAMS.VIEWS_LTE) ?? VIEWS_LTE_DEFAULT_VALUE.toString(),
    VIEWS_LTE_DEFAULT_VALUE,
  );

  const likesGte = getNumberOrDefault(
    searchParams.get(ADVERTISEMENTS_SEARCH_PARAMS.LIKES_GTE) ?? LIKES_GTE_DEFAULT_VALUE.toString(),
    LIKES_GTE_DEFAULT_VALUE,
  );

  const likesLte = getNumberOrDefault(
    searchParams.get(ADVERTISEMENTS_SEARCH_PARAMS.LIKES_LTE) ?? LIKES_LTE_DEFAULT_VALUE.toString(),
    LIKES_LTE_DEFAULT_VALUE,
  );

  const formattedSearchParams: Partial<Record<AdvertisementsSearchParamsSnakeCase, string>> =
    useMemo(
      () => ({
        name: name === NAME_DEFAULT_VALUE ? undefined : name,
        page: page === PAGE_DEFAULT_VALUE ? undefined : page.toString(),
        per_page: perPage === PER_PAGE_DEFAULT_VALUE ? undefined : perPage.toString(),
        price_gte: priceGte === PRICE_GTE_DEFAULT_VALUE ? undefined : priceGte.toString(),
        price_lte: priceLte === PRICE_LTE_DEFAULT_VALUE ? undefined : priceLte.toString(),
        views_gte: viewsGte === VIEWS_GTE_DEFAULT_VALUE ? undefined : viewsGte.toString(),
        views_lte: viewsLte === VIEWS_LTE_DEFAULT_VALUE ? undefined : viewsLte.toString(),
        likes_gte: likesGte === LIKES_GTE_DEFAULT_VALUE ? undefined : likesGte.toString(),
        likes_lte: likesLte === LIKES_LTE_DEFAULT_VALUE ? undefined : likesLte.toString(),
      }),
      [name, page, perPage, priceGte, priceLte, viewsGte, viewsLte, likesGte, likesLte],
    );

  const setAdvertisementsSearchParams = useCallback(
    ({
      page,
      name,
      perPage,
      likesGte,
      likesLte,
      priceGte,
      priceLte,
      viewsGte,
      viewsLte,
    }: AdvertisementsSearchParams) => {
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
      if (likesGte) {
        if (likesGte === LIKES_GTE_DEFAULT_VALUE) {
          delete newSearchParams[ADVERTISEMENTS_SEARCH_PARAMS.LIKES_GTE];
        } else {
          newSearchParams[ADVERTISEMENTS_SEARCH_PARAMS.LIKES_GTE] = likesGte.toString();
        }
      }
      if (likesLte) {
        if (likesLte === LIKES_LTE_DEFAULT_VALUE) {
          delete newSearchParams[ADVERTISEMENTS_SEARCH_PARAMS.LIKES_LTE];
        } else {
          newSearchParams[ADVERTISEMENTS_SEARCH_PARAMS.LIKES_LTE] = likesLte.toString();
        }
      }
      if (priceGte) {
        if (priceGte === PRICE_GTE_DEFAULT_VALUE) {
          delete newSearchParams[ADVERTISEMENTS_SEARCH_PARAMS.PRICE_GTE];
        } else {
          newSearchParams[ADVERTISEMENTS_SEARCH_PARAMS.PRICE_GTE] = priceGte.toString();
        }
      }
      if (priceLte) {
        if (priceLte === PRICE_LTE_DEFAULT_VALUE) {
          delete newSearchParams[ADVERTISEMENTS_SEARCH_PARAMS.PRICE_LTE];
        } else {
          newSearchParams[ADVERTISEMENTS_SEARCH_PARAMS.PRICE_LTE] = priceLte.toString();
        }
      }
      if (viewsGte) {
        if (viewsGte === VIEWS_GTE_DEFAULT_VALUE) {
          delete newSearchParams[ADVERTISEMENTS_SEARCH_PARAMS.VIEWS_GTE];
        } else {
          newSearchParams[ADVERTISEMENTS_SEARCH_PARAMS.VIEWS_GTE] = viewsGte.toString();
        }
      }
      if (viewsLte) {
        if (viewsLte === VIEWS_LTE_DEFAULT_VALUE) {
          delete newSearchParams[ADVERTISEMENTS_SEARCH_PARAMS.VIEWS_LTE];
        } else {
          newSearchParams[ADVERTISEMENTS_SEARCH_PARAMS.VIEWS_LTE] = viewsLte.toString();
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
    priceGte,
    priceLte,
    viewsGte,
    viewsLte,
    likesGte,
    likesLte,
    setAdvertisementsSearchParams,
  };
};
