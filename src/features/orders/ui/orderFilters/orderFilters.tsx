import { OrderSortSelect, OrderStatusSelect } from '@/entities/order';
import type { OrderFiltersProps } from './orderFilters.types';
import { Flex } from 'antd';
import { GAPS } from '@/shared/constants';

export const OrderFilters = ({ className }: OrderFiltersProps) => {
  return (
    <Flex className={className} vertical gap={GAPS.XL}>
      <OrderStatusSelect />
      <OrderSortSelect />
    </Flex>
  );
};
