import { List } from 'antd';
import type { OrderItemsProps } from './orderItems.types';
import { OrderItem } from './ui';
import styles from './orderItems.module.scss';
import { Link } from 'react-router-dom';
import { ROUTER_PATHS } from '@/shared/constants';
import { joinPaths } from '@/shared/lib';

export const OrderItems = ({ orderItems, className }: OrderItemsProps) => {
  return (
    <List className={className}>
      {orderItems.map((orderItem) => (
        <List.Item key={orderItem.id}>
          <Link
            to={joinPaths(ROUTER_PATHS.HOME + ROUTER_PATHS.ADVERTISEMENTS, orderItem.id)}
            className={styles.orderItemLink}>
            <OrderItem orderItem={orderItem} className={styles.orderItem} />
          </Link>
        </List.Item>
      ))}
    </List>
  );
};
