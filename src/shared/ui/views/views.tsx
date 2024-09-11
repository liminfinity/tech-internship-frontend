import type { ViewsProps } from './views.types';
import { FaEye } from 'react-icons/fa';
import { FONT_SIZES } from '@/shared/constants';
import { IconText } from '../iconText';

export const Views = ({ viewsCnt, className }: ViewsProps) => {
  return (
    <IconText
      icon={<FaEye fontSize={FONT_SIZES.SM} />}
      text={viewsCnt.toString()}
      className={className}
    />
  );
};
