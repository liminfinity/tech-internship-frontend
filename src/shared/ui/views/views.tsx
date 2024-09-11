import { Flex, Typography } from 'antd';
import type { ViewsProps } from './views.types';
import { FaEye } from 'react-icons/fa';
import { FONT_SIZES, GAPS } from '@/shared/constants';

const { Text } = Typography;

export const Views = ({ viewsCnt, className }: ViewsProps) => {
  return (
    <Flex align="center" gap={GAPS.SM} className={className}>
      <FaEye fontSize={FONT_SIZES.SM} />
      <Text>{viewsCnt}</Text>
    </Flex>
  );
};
