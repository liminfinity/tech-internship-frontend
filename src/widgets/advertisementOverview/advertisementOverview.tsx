import { Flex } from 'antd';
import type { AdvertisementOverviewProps } from './advertisementOverview.types';
import { GAPS } from '@/shared/constants';
import {
  AdvertisementInfo,
  AdvertisementDetails,
  useGetAdvertisementQuery,
  getAdvertisementDetails,
  getAdvertisementInfo,
} from '@/entities/advertisement';
import { PendingErrorGuard } from '@/shared/ui';
import { ERROR_MESSAGE, LOADING_MESSAGE } from './advertisementOverview.constants';
import styles from './advertisementOverview.module.scss';

export const AdvertisementOverview = ({
  advertisementId,
  className,
}: AdvertisementOverviewProps) => {
  const { data, isError, isLoading, isSuccess } = useGetAdvertisementQuery(advertisementId);

  return (
    <PendingErrorGuard
      isError={isError}
      isPending={isLoading}
      errorMessage={ERROR_MESSAGE}
      pendingMessage={LOADING_MESSAGE}
      className={className}>
      <Flex
        align="flex-start"
        justify="space-between"
        className={className}
        gap={GAPS.XL}
        component={'section'}>
        {isSuccess && (
          <>
            <AdvertisementInfo className={styles.info} info={getAdvertisementInfo(data)} />
            <AdvertisementDetails
              className={styles.details}
              details={getAdvertisementDetails(data)}
            />
          </>
        )}
      </Flex>
    </PendingErrorGuard>
  );
};
