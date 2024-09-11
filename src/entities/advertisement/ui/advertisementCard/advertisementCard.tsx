import { Card, Empty, Flex, Image, Typography } from 'antd';
import type { AdvertisementCardProps } from './advertisementCard.types';

import { Likes, Views } from '@/shared/ui';
import { useMemo } from 'react';
import { GAPS } from '@/shared/constants';

const { Meta } = Card;

const { Text } = Typography;

export const AdvertisementCard = ({ advertisement, className }: AdvertisementCardProps) => {
  const { name, price, imageUrl, views, likes } = advertisement;

  const altImg = `${name} image`;

  const cover = useMemo(
    () =>
      imageUrl ? (
        <Image src={imageUrl} alt={altImg} />
      ) : (
        <Empty description="Нет изображения" image={Empty.PRESENTED_IMAGE_SIMPLE} />
      ),
    [imageUrl, altImg],
  );

  const formattedPrice = price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });

  return (
    <Card hoverable className={className} cover={cover}>
      <Flex vertical gap={GAPS.DEFAULT}>
        <Meta
          title={<Text ellipsis>{name}</Text>}
          description={<Text ellipsis>{formattedPrice}</Text>}
        />
        <Flex justify="space-between" wrap gap={GAPS.SM}>
          <Likes likesCnt={likes} />
          <Views viewsCnt={views} />
        </Flex>
      </Flex>
    </Card>
  );
};
