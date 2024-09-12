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

export const OrderStatusRu = {
  [OrderStatus.Created]: 'Создан',
  [OrderStatus.Paid]: 'Оплачен',
  [OrderStatus.Transport]: 'В пути',
  [OrderStatus.DeliveredToThePoint]: 'Доставлен',
  [OrderStatus.Received]: 'Получен',
  [OrderStatus.Archived]: 'Архивирован',
  [OrderStatus.Refund]: 'Возврат',
} as const;

export type OrderStatusKeys = keyof typeof OrderStatus;

export type OrderStatusValues = (typeof OrderStatus)[keyof typeof OrderStatus];

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
