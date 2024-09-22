import type { OrderListProps } from './orderList.types';
import { PendingErrorGuard } from '@/shared/ui';
import { Empty, List } from 'antd';
import {
  ERROR_MESSAGE,
  GRID_SETTINGS,
  LOADING_MESSAGE,
  NOT_FOUND_MESSAGE,
} from './orderList.constants';
import { useGetOrdersQuery, useOrdersSearchParams } from '@/entities/order';
import { OrderCard } from '@/entities/order';
import styles from './orderList.module.scss';

export const OrderList = ({ className }: OrderListProps) => {
  const { page, perPage, sort, status } = useOrdersSearchParams();

  const { data, isError, isLoading, isSuccess } = useGetOrdersQuery({
    page,
    perPage,
    sort,
    status,
  });

  return (
    <PendingErrorGuard
      isError={isError}
      isPending={isLoading}
      errorMessage={ERROR_MESSAGE}
      pendingMessage={LOADING_MESSAGE}
      className={className}>
      {isSuccess && data.data?.length > 0 && (
        <List
          dataSource={data.data}
          grid={GRID_SETTINGS}
          renderItem={(order) => (
            <List.Item key={order.id} className={styles.item}>
              <OrderCard order={order} className={styles.card} />
            </List.Item>
          )}
        />
      )}
      {isSuccess && data.data?.length === 0 && (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={NOT_FOUND_MESSAGE} />
      )}
    </PendingErrorGuard>
  );
};
