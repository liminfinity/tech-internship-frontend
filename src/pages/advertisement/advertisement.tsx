import { useAdvertisementParams } from '@/entities/advertisement';
import { UpdateAdvertisementButton } from '@/features/updateAdvertisement';
import { AdvertisementOverview } from '@/widgets/advertisementOverview';
import { Flex } from 'antd';
import styles from './advertisement.module.scss';
import { GAPS } from '@/shared/constants';

export const AdvertisementPage = () => {
  const { advertisementId } = useAdvertisementParams();

  if (!advertisementId) return null;

  return (
    <Flex vertical gap={GAPS.XL}>
      <UpdateAdvertisementButton className={styles.updateButton} />
      <AdvertisementOverview advertisementId={advertisementId} />
    </Flex>
  );
};
