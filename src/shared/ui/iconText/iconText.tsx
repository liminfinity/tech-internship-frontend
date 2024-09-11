import { Flex, Typography } from 'antd';
import type { IconTextProps } from './iconText.types';
import { GAPS } from '@/shared/constants';

const { Text } = Typography;

export const IconText = ({ icon, text, ...props }: IconTextProps) => {
  return (
    <Flex align="center" {...props} gap={GAPS.SM}>
      {icon}
      <Text>{text}</Text>
    </Flex>
  );
};
