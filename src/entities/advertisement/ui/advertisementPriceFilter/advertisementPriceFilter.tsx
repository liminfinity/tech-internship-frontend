import { useAdvertisementsSearchParams } from '@/entities/advertisement';
import type { AdvertisementPriceFilterProps } from './advertisementPriceFilter.types';
import { useCallback, useState } from 'react';
import type { SliderRangeProps } from 'antd/es/slider';
import {
  PRICE_GTE_DEFAULT_VALUE,
  PRICE_LTE_DEFAULT_VALUE,
} from '@/entities/advertisement/constants';
import { RangeSlider } from '@/shared/ui';
import { useDebounceEffect } from 'ahooks';
import { FILTER_WAITING_TIME } from './advertisementPriceFilter.constants';

export const AdvertisementPriceFilter = ({ className }: AdvertisementPriceFilterProps) => {
  const { priceGte, priceLte, setAdvertisementsSearchParams } = useAdvertisementsSearchParams();
  const [filterPriceGte, setFilterPriceGte] = useState(priceGte);
  const [filterPriceLte, setFilterPriceLte] = useState(priceLte);

  const handlePriceChange: Required<SliderRangeProps>['onChange'] = useCallback((value) => {
    setFilterPriceGte(value[0]);
    setFilterPriceLte(value[1]);
  }, []);

  useDebounceEffect(
    () => {
      setAdvertisementsSearchParams({
        priceGte: filterPriceGte,
        priceLte: filterPriceLte,
      });
    },
    [filterPriceGte, filterPriceLte],
    {
      wait: FILTER_WAITING_TIME,
    },
  );

  return (
    <RangeSlider
      label="Цена, ₽"
      min={PRICE_GTE_DEFAULT_VALUE}
      max={PRICE_LTE_DEFAULT_VALUE}
      value={[filterPriceGte, filterPriceLte]}
      onChange={handlePriceChange}
      className={className}
    />
  );
};
