import { useAdvertisementParams } from '@/entities/advertisement';
import { AdvertisementOverview } from '@/widgets/advertisementOverview';
import { Flex } from 'antd';

export const AdvertisementPage = () => {
  const { advertisementId } = useAdvertisementParams();

  if (!advertisementId) return null;

  return (
    <Flex vertical>
      <AdvertisementOverview advertisementId={advertisementId} />
    </Flex>
  );
};
