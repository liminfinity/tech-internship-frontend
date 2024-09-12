import { useAdvertisementsSearchParams } from '@/entities/advertisement';
import type { AdvertisementLikesFilterProps } from './advertisementLikesFilter.types';
import { useCallback, useState } from 'react';
import type { SliderRangeProps } from 'antd/es/slider';
import {
  LIKES_GTE_DEFAULT_VALUE,
  LIKES_LTE_DEFAULT_VALUE,
} from '@/entities/advertisement/constants';
import { RangeSlider } from '@/shared/ui';
import { useDebounceEffect } from 'ahooks';
import { FILTER_WAITING_TIME } from './advertisementLikesFilter.constants';

export const AdvertisementLikesFilter = ({ className }: AdvertisementLikesFilterProps) => {
  const { likesGte, likesLte, setAdvertisementsSearchParams } = useAdvertisementsSearchParams();
  const [filterLikesGte, setFilterLikesGte] = useState(likesGte);
  const [filterLikesLte, setFilterLikesLte] = useState(likesLte);

  const handleLikesChange: Required<SliderRangeProps>['onChange'] = useCallback((value) => {
    setFilterLikesGte(value[0]);
    setFilterLikesLte(value[1]);
  }, []);

  useDebounceEffect(
    () => {
      setAdvertisementsSearchParams({
        likesGte: filterLikesGte,
        likesLte: filterLikesLte,
      });
    },
    [filterLikesGte, filterLikesLte],
    {
      wait: FILTER_WAITING_TIME,
    },
  );

  return (
    <RangeSlider
      label="Количество лайков"
      min={LIKES_GTE_DEFAULT_VALUE}
      max={LIKES_LTE_DEFAULT_VALUE}
      value={[filterLikesGte, filterLikesLte]}
      onChange={handleLikesChange}
      className={className}
    />
  );
};
