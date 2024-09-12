import type { DefaultProps } from '@/shared/types';
import type { OrderItem } from '@/entities/order';

export type OrderItemsButtonProps = DefaultProps & {
  orderItems: OrderItem[];
};
