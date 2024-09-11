import { Flex, Typography } from 'antd';
import type { LikesProps } from './likes.types';
import { FcLike } from 'react-icons/fc';
import { FONT_SIZES, GAPS } from '@/shared/constants';

const { Text } = Typography;

export const Likes = ({ likesCnt, className }: LikesProps) => {
  return (
    <Flex align="center" gap={GAPS.SM} className={className}>
      <FcLike fontSize={FONT_SIZES.SM} />
      <Text>{likesCnt}</Text>
    </Flex>
  );
};
