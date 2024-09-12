import { Card, Flex, Typography } from 'antd';
import type { OrderCardProps } from './orderCard.types';
import { GAPS } from '@/shared/constants';
import { formatPriceToRub, formatToCreatedAt } from '@/shared/lib';
import { OrderStatusRu } from '../../types';
import { OrderItemsButton } from '../orderItemsButton';

const { Text } = Typography;

const finishedText = 'Заказ может быть завершен';

export const OrderCard = ({ order, className }: OrderCardProps) => {
  const { total, deliveryWay, status, items, createdAt, finishedAt } = order;

  const formattedCreatedAt = formatToCreatedAt(createdAt);

  const formattedTotal = `Общая стоимость: ${formatPriceToRub(total)}`;

  const formattedStatus = `Статус: ${OrderStatusRu[status]}`;

  const formattedDeliveryWay = `Способ доставки: ${deliveryWay}`;

  return (
    <Card className={className}>
      <Flex vertical>
        <Flex justify="space-between" vertical gap={GAPS.SM}>
          <Text strong>{formattedStatus}</Text>
          <Text>{formattedTotal}</Text>
          <Text type="secondary">{formattedCreatedAt}</Text>
          <Text>{formattedDeliveryWay}</Text>
          <OrderItemsButton orderItems={items} />
          {finishedAt && <Text>{finishedText}</Text>}
        </Flex>
      </Flex>
    </Card>
  );
};
