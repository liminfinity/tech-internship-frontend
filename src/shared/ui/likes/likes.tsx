import type { LikesProps } from './likes.types';
import { FcLike } from 'react-icons/fc';
import { IconText } from '../iconText';
import { FONT_SIZES } from '@/shared/constants';

export const Likes = ({ likesCnt, className }: LikesProps) => {
  return (
    <IconText
      icon={<FcLike fontSize={FONT_SIZES.SM} />}
      text={likesCnt.toString()}
      className={className}
    />
  );
};
