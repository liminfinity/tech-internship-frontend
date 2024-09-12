import { useAdvertisementsSearchParams, useGetAdvertisementsQuery } from '@/entities/advertisement';
import type { AdvertisementSearchProps } from './advertisementSearch.types';
import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input';
import { useCallback, useState } from 'react';
import { useDebounceEffect } from 'ahooks';
import { SEARCH_WAITING_TIME } from './advertisementSearch.constants';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export const AdvertisementSearch = ({ className }: AdvertisementSearchProps) => {
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
  const [search, setSearch] = useState(name);

  useGetAdvertisementsQuery({
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

  const handleChange: Required<SearchProps>['onChange'] = useCallback(({ target }) => {
    setSearch(target.value);
  }, []);

  useDebounceEffect(
    () => {
      setAdvertisementsSearchParams({
        name: search,
      });
    },
    [search],
    {
      wait: SEARCH_WAITING_TIME,
    },
  );

  return (
    <Input
      addonBefore={<FaMagnifyingGlass />}
      size="large"
      allowClear
      placeholder="Поиск объявлений"
      className={className}
      value={search}
      onChange={handleChange}
    />
  );
};
