import { useAdvertisementsSearchParams, useGetAdvertisementsQuery } from '@/entities/advertisement';
import type { AdvertisementSearchProps } from './advertisementSearch.types';
import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input';
import { useCallback, useState } from 'react';
import { useDebounceEffect } from 'ahooks';
import { SEARCH_WAITING_TIME } from './advertisementSearch.constants';

const { Search } = Input;

export const AdvertisementSearch = ({ className }: AdvertisementSearchProps) => {
  const { q, page, perPage, setAdvertisementsSearchParams } = useAdvertisementsSearchParams();
  const [search, setSearch] = useState(q);

  const { isLoading } = useGetAdvertisementsQuery({
    q,
    page,
    perPage,
  });

  const handleChange: Required<SearchProps>['onChange'] = useCallback(({ target }) => {
    setSearch(target.value);
  }, []);

  useDebounceEffect(
    () => {
      setAdvertisementsSearchParams({
        q: search,
      });
    },
    [search],
    {
      wait: SEARCH_WAITING_TIME,
    },
  );

  return (
    <Search
      loading={isLoading}
      enterButton
      size="large"
      allowClear
      placeholder="Поиск объявлений"
      className={className}
      value={search}
      onChange={handleChange}
    />
  );
};
