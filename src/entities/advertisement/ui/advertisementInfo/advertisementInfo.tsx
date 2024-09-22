import { Flex, Typography } from 'antd';
import type { AdvertisementInfoProps } from './advertisementInfo.types';

import { ImageOrEmpty } from '@/shared/ui';
import { GAPS } from '@/shared/constants';
import styles from './advertisementInfo.module.scss';

const { Title, Paragraph } = Typography;

export const AdvertisementInfo = ({ info, className }: AdvertisementInfoProps) => {
  const { name, description, imageUrl } = info;

  const altImg = `${name} image`;

  return (
    <Flex vertical gap={GAPS.XL} className={className}>
      <Title copyable level={1}>
        {name}
      </Title>
      <ImageOrEmpty src={imageUrl} alt={altImg} className={styles.image} />
      {description && (
        <Flex vertical gap={GAPS.SM} className={styles.description}>
          <Title copyable={{ text: description }} level={3}>
            Описание
          </Title>
          <Paragraph>{description}</Paragraph>
        </Flex>
      )}
    </Flex>
  );
};
