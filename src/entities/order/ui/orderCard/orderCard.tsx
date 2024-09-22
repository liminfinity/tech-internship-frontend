import { Card, Flex, Typography } from 'antd';
import type { OrderCardProps } from './orderCard.types';
import { GAPS } from '@/shared/constants';
import { cn, formatPriceToRub, formatToCreatedAt } from '@/shared/lib';
import { OrderItemsButton } from '../orderItemsButton';
import { ORDER_STATUS_CODE } from '../../constants';
import styles from './orderCard.module.scss';

const { Text } = Typography;

const finishedText = 'Заказ может быть завершен';

export const OrderCard = ({ order, className }: OrderCardProps) => {
  const { total, deliveryWay, status, items, createdAt, finishedAt } = order;

  const formattedCreatedAt = formatToCreatedAt(createdAt);

  const formattedTotal = `Общая стоимость: ${formatPriceToRub(total)}`;

  const formattedStatus = `Статус: ${ORDER_STATUS_CODE[status]}`;

  const formattedDeliveryWay = `Способ доставки: ${deliveryWay}`;

  return (
    <Card className={cn(styles.card, className)}>
      <Flex justify="space-between" className={styles.content} vertical gap={GAPS.SM}>
        <Flex vertical gap={GAPS.SM}>
          <Text strong>{formattedStatus}</Text>
          <Text>{formattedTotal}</Text>
          <Text type="secondary">{formattedCreatedAt}</Text>
          <Text>{formattedDeliveryWay}</Text>
          {finishedAt && <Text type="success">{finishedText}</Text>}
        </Flex>
        <OrderItemsButton orderItems={items} />
      </Flex>
    </Card>
  );
};
