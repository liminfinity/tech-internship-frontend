import { Card, Flex, Typography } from 'antd';
import type { AdvertisementCardProps } from './advertisementCard.types';

import { ImageOrEmpty, Likes, Views } from '@/shared/ui';
import { GAPS } from '@/shared/constants';
import { formatPriceToRub } from '@/shared/lib';
import styles from './advertisementCard.module.scss';

const { Meta } = Card;

const { Text } = Typography;

export const AdvertisementCard = ({ advertisement, className }: AdvertisementCardProps) => {
  const { name, price, imageUrl, views, likes } = advertisement;

  const altImg = `${name} image`;

  const formattedPrice = formatPriceToRub(price);

  return (
    <Card
      hoverable
      className={className}
      cover={<ImageOrEmpty preview={false} src={imageUrl} alt={altImg} className={styles.image} />}>
      <Flex vertical>
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
