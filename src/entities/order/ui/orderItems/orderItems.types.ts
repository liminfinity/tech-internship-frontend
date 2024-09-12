import type { DefaultProps } from '@/shared/types';
import type { OrderItem } from '@/entities/order';

export type OrderItemsProps = DefaultProps & {
  orderItems: OrderItem[];
};
