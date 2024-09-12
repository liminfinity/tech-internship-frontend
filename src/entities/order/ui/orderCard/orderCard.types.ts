import type { DefaultProps } from '@/shared/types';
import type { Order } from '../../types';

export type OrderCardProps = DefaultProps & {
  order: Order;
};
