import { useAdvertisementsSearchParams } from '@/entities/advertisement';
import type { AdvertisementViewsFilterProps } from './advertisementViewsFilter.types';
import { useCallback, useState } from 'react';
import type { SliderRangeProps } from 'antd/es/slider';
import {
  LIKES_GTE_DEFAULT_VALUE,
  LIKES_LTE_DEFAULT_VALUE,
} from '@/entities/advertisement/constants';
import { RangeSlider } from '@/shared/ui';
import { useDebounceEffect } from 'ahooks';
import { FILTER_WAITING_TIME } from './advertisementViewsFilter.constants';

export const AdvertisementViewsFilter = ({ className }: AdvertisementViewsFilterProps) => {
  const { viewsGte, viewsLte, setAdvertisementsSearchParams } = useAdvertisementsSearchParams();
  const [filterViewsGte, setFilterViewsGte] = useState(viewsGte);
  const [filterViewsLte, setFilterViewsLte] = useState(viewsLte);

  const handleViewsChange: Required<SliderRangeProps>['onChange'] = useCallback((value) => {
    setFilterViewsGte(value[0]);
    setFilterViewsLte(value[1]);
  }, []);

  useDebounceEffect(
    () => {
      setAdvertisementsSearchParams({
        viewsGte: filterViewsGte,
        viewsLte: filterViewsLte,
      });
    },
    [filterViewsLte, filterViewsGte],
    {
      wait: FILTER_WAITING_TIME,
    },
  );

  return (
    <RangeSlider
      label="Количество просмотров"
      min={LIKES_GTE_DEFAULT_VALUE}
      max={LIKES_LTE_DEFAULT_VALUE}
      value={[filterViewsGte, filterViewsLte]}
      onChange={handleViewsChange}
      className={className}
    />
  );
};
