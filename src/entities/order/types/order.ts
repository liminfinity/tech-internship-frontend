import type { Advertisement } from '@/entities/advertisement';
import type { BaseEntity } from '@/shared/types';

export const OrderStatus = {
  Created: 0,
  Paid: 1,
  Transport: 2,
  DeliveredToThePoint: 3,
  Received: 4,
  Archived: 5,
  Refund: 6,
} as const;

export type Order = BaseEntity & {
  /* Статус. */
  status: (typeof OrderStatus)[keyof typeof OrderStatus];
  /* Дата и время создания. */
  createdAt: string;
  /* Дата и время завершения. */
  finishedAt?: string;
  /* Товары в заказе. */
  items: Array<OrderItem>;
  /* Способ доставки(Почта, СДЭК...) */
  deliveryWay: string;
  /* Сумма заказа */
  total: number;
};

export type OrderItem = Advertisement & { count: number };
