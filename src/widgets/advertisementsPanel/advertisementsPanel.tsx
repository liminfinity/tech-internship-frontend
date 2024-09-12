import { Flex } from 'antd';
import type { AdvertisementsPanelProps } from './advertisementsPanel.types';
import {
  AdvertisementSearch,
  AdvertisementFilters,
  AdvertisementList,
  AdvertisementPagination,
} from '@/features/advertisements';
import styles from './advertisementsPanel.module.scss';
import { GAPS } from '@/shared/constants';

export const AdvertisementsPanel = ({ className }: AdvertisementsPanelProps) => {
  return (
    <Flex vertical className={className} gap={GAPS.XL} component={'section'}>
      <AdvertisementSearch className={styles.search} />
      <Flex
        className={styles.main}
        wrap
        justify="space-between"
        gap={GAPS.DEFAULT}
        component={'main'}>
        <AdvertisementFilters className={styles.filters} />
        <AdvertisementList className={styles.list} />
      </Flex>
      <AdvertisementPagination />
    </Flex>
  );
};
