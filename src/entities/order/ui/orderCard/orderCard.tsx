import { Card, Flex, Typography } from 'antd';
import type { OrderCardProps } from './orderCard.types';
import { GAPS } from '@/shared/constants';
import { formatPriceToRub, formatToCreatedAt } from '@/shared/lib';
import { OrderItemsButton } from '../orderItemsButton';
import { ORDER_STATUS_CODE } from '../../constants';

const { Text } = Typography;

const finishedText = 'Заказ может быть завершен';

export const OrderCard = ({ order, className }: OrderCardProps) => {
  const { total, deliveryWay, status, items, createdAt, finishedAt } = order;

  const formattedCreatedAt = formatToCreatedAt(createdAt);

  const formattedTotal = `Общая стоимость: ${formatPriceToRub(total)}`;

  const formattedStatus = `Статус: ${ORDER_STATUS_CODE[status]}`;

  const formattedDeliveryWay = `Способ доставки: ${deliveryWay}`;

  return (
    <Card className={className}>
      <Flex vertical>
        <Flex justify="space-between" vertical gap={GAPS.SM}>
          <Text strong>{formattedStatus}</Text>
          <Text>{formattedTotal}</Text>
          <Text type="secondary">{formattedCreatedAt}</Text>
          <Text>{formattedDeliveryWay}</Text>
          {finishedAt && <Text type="success">{finishedText}</Text>}
          <OrderItemsButton orderItems={items} />
        </Flex>
      </Flex>
    </Card>
  );
};
