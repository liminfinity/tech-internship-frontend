import { Card, Flex, Typography } from 'antd';
import type { AdvertisementDetailsProps } from './advertisementDetails.types';

import { Likes, Views } from '@/shared/ui';
import { GAPS } from '@/shared/constants';
import { formatPriceToRub, formatToCreatedAt } from '@/shared/lib';

const { Title, Text } = Typography;

export const AdvertisementDetails = ({ details, className }: AdvertisementDetailsProps) => {
  const { price, createdAt, views, likes } = details;

  const formattedPrice = formatPriceToRub(price);

  const formattedDate = formatToCreatedAt(createdAt);

  return (
    <Card className={className}>
      <Flex vertical gap={GAPS.DEFAULT}>
        <Title level={3}>{formattedPrice}</Title>
        <Flex vertical wrap gap={GAPS.SM}>
          <Likes likesCnt={likes} />
          <Views viewsCnt={views} />
          <Text>{formattedDate}</Text>
        </Flex>
      </Flex>
    </Card>
  );
};
