import { useAdvertisementsSearchParams, useGetAdvertisementsQuery } from '@/entities/advertisement';
import type { AdvertisementListProps } from './advertisementList.types';
import { PendingErrorGuard } from '@/shared/ui';
import { AdvertisementCard } from '@/entities/advertisement';
import { Empty, List } from 'antd';
import { ERROR_MESSAGE, LOADING_MESSAGE, NOT_FOUND_MESSAGE } from './advertisementList.constants';
import type { ListGridType } from 'antd/es/list';
import { Link } from 'react-router-dom';
import { joinPaths } from '@/shared/lib';
import { ROUTER_PATHS } from '@/shared/constants';

const GRID_SETTINGS: ListGridType = {
  gutter: 16,
  xs: 1,
  sm: 2,
  md: 4,
  lg: 4,
  xl: 6,
  xxl: 3,
};

export const AdvertisementList = ({ className }: AdvertisementListProps) => {
  const { name, page, perPage } = useAdvertisementsSearchParams();

  const { data, isError, isLoading, isSuccess } = useGetAdvertisementsQuery({
    name,
    page,
    perPage,
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
          renderItem={(advertisement) => (
            <List.Item key={advertisement.id}>
              <Link
                to={joinPaths(ROUTER_PATHS.HOME + ROUTER_PATHS.ADVERTISEMENTS, advertisement.id)}>
                <AdvertisementCard advertisement={advertisement} />
              </Link>
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
