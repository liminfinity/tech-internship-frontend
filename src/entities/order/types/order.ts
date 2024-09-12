import type { Advertisement } from '@/entities/advertisement';
import type { BaseEntity } from '@/shared/types';
import type { ORDER_STATUS } from '../constants';

export type OrderStatusKeys = keyof typeof ORDER_STATUS;

export type OrderStatusValues = (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS];

export type Order = BaseEntity & {
  /* Статус. */
  status: OrderStatusValues;
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
