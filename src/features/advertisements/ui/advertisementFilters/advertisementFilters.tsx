import {
  AdvertisementLikesFilter,
  AdvertisementPriceFilter,
  AdvertisementViewsFilter,
} from '@/entities/advertisement';
import type { AdvertisementFiltersProps } from './advertisementFilters.types';
import { Flex } from 'antd';

export const AdvertisementFilters = ({ className }: AdvertisementFiltersProps) => {
  return (
    <Flex className={className} vertical>
      <AdvertisementPriceFilter />
      <AdvertisementLikesFilter />
      <AdvertisementViewsFilter />
    </Flex>
  );
};
