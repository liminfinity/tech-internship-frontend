import type { OrderStatusSelectProps } from './orderStatusSelect.types';
import { useOrdersSearchParams } from '../../hooks';
import { Flex, Select, type SelectProps, Typography } from 'antd';
import { createOptions } from '@/shared/lib';
import { ORDER_STATUS_LABEL } from '../../constants';
import { useCallback } from 'react';
import { GAPS } from '@/shared/constants';
import type { OrdersSearchParams } from '../../types';

const { Text } = Typography;

const options = createOptions(ORDER_STATUS_LABEL);

export const OrderStatusSelect = ({ className }: OrderStatusSelectProps) => {
  const { status, setOrdersSearchParams } = useOrdersSearchParams();

  const handleChange: Required<SelectProps>['onChange'] = useCallback(
    (statusValue) => {
      setOrdersSearchParams({ status: statusValue as OrdersSearchParams['status'] });
    },
    [setOrdersSearchParams],
  );

  return (
    <Flex vertical gap={GAPS.SM} className={className}>
      <Text strong>Статус</Text>
      <Select size="large" value={status} options={options} onChange={handleChange} />
    </Flex>
  );
};
