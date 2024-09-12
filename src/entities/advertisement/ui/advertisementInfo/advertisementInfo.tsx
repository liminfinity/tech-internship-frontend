import { Card, Flex, Typography } from 'antd';
import type { AdvertisementInfoProps } from './advertisementInfo.types';

import { ImageOrEmpty } from '@/shared/ui';
import { GAPS } from '@/shared/constants';

const { Title, Paragraph } = Typography;

export const AdvertisementInfo = ({ info, className }: AdvertisementInfoProps) => {
  const { name, description, imageUrl } = info;

  const altImg = `${name} image`;

  return (
    <Card className={className}>
      <Flex vertical gap={GAPS.DEFAULT}>
        <Title copyable level={2}>
          {name}
        </Title>
        <ImageOrEmpty src={imageUrl} alt={altImg} />
        {description && (
          <Flex vertical gap={GAPS.SM}>
            <Title copyable={{ text: description }} level={4}>
              Описание
            </Title>
            <Paragraph>{description}</Paragraph>
          </Flex>
        )}
      </Flex>
    </Card>
  );
};
