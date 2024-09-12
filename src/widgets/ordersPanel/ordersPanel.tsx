import { Flex } from 'antd';
import type { OrdersPanelProps } from './ordersPanel.types';
import styles from './ordersPanel.module.scss';
import { GAPS } from '@/shared/constants';
import { OrderFilters, OrderList, OrderPagination } from '@/features/orders';

export const OrdersPanel = ({ className }: OrdersPanelProps) => {
  return (
    <Flex vertical className={className} gap={GAPS.XL} component={'section'}>
      <Flex
        className={styles.main}
        wrap
        justify="space-between"
        gap={GAPS.DEFAULT}
        component={'main'}>
        <OrderFilters className={styles.filters} />
        <OrderList className={styles.list} />
      </Flex>
      <OrderPagination />
    </Flex>
  );
};
