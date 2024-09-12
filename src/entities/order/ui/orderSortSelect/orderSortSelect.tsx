import type { OrderSortSelectProps } from './orderSortSelect.types';
import { useOrdersSearchParams } from '../../hooks';
import { Flex, Select, type SelectProps, Typography } from 'antd';
import { createOptions } from '@/shared/lib';
import { ORDER_SORT_BY } from '../../constants';
import { useCallback } from 'react';
import type { OrdersSort } from '../../types';
import { GAPS } from '@/shared/constants';

const { Text } = Typography;

const options = createOptions(ORDER_SORT_BY);

export const OrderSortSelect = ({ className }: OrderSortSelectProps) => {
  const { sort, setOrdersSearchParams } = useOrdersSearchParams();

  const handleChange: Required<SelectProps>['onChange'] = useCallback(
    (sortValue) => {
      setOrdersSearchParams({ sort: sortValue as OrdersSort });
    },
    [setOrdersSearchParams],
  );

  return (
    <Flex vertical gap={GAPS.SM} className={className}>
      <Text strong>Сортировать</Text>
      <Select size="large" value={sort} options={options} onChange={handleChange} />
    </Flex>
  );
};
