import type { DefaultProps } from '@/shared/types';
import type { OrderItem } from '@/entities/order';

export type OrderItemProps = DefaultProps & {
  orderItem: OrderItem;
};
