import { Flex } from 'antd';
import { OrdersPanel } from '@/widgets/ordersPanel';

export const OrdersPage = () => {
  return (
    <Flex vertical>
      <OrdersPanel />
    </Flex>
  );
};
