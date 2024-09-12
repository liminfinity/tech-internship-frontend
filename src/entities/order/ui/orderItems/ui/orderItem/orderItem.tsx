import { Card, Divider, Flex, Typography } from 'antd';
import type { OrderItemProps } from './orderItem.types';
import { GAPS } from '@/shared/constants';
import { ImageOrEmpty, Likes, Views } from '@/shared/ui';
import styles from './orderItem.module.scss';

const { Text } = Typography;

export const OrderItem = ({ orderItem, className }: OrderItemProps) => {
  const { count, views, likes, name, imageUrl } = orderItem;

  const formattedCount = `Количество: ${count}`;

  const imgAlt = `Изображение ${name}`;

  return (
    <Card hoverable className={className}>
      <Flex align="center" gap={GAPS.LG}>
        <Flex vertical align="flex-start" gap={GAPS.SM} className={styles.info}>
          <Text strong ellipsis>
            {name}
          </Text>
          <Text ellipsis>{formattedCount}</Text>
          <Flex justify="space-between" align="center" wrap gap={GAPS.SM}>
            <Likes likesCnt={likes} />
            <Divider type="vertical" />
            <Views viewsCnt={views} />
          </Flex>
        </Flex>
        <ImageOrEmpty preview={false} src={imageUrl} alt={imgAlt} />
      </Flex>
    </Card>
  );
};
