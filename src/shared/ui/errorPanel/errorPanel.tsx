import { Flex, Typography } from 'antd';
import type { ErrorPanelProps } from './errorPanel.types';
import { FONT_SIZES, GAPS } from '@/shared/constants';
import { HiOutlineEmojiSad } from 'react-icons/hi';
import styles from './errorPanel.module.scss';

const { Text } = Typography;

export const ErrorPanel = ({ description = 'Произошла ошибка', className }: ErrorPanelProps) => {
  return (
    <Flex align="center" vertical gap={GAPS.SM} className={className}>
      <HiOutlineEmojiSad fontSize={FONT_SIZES.LG} className={styles.icon} />
      <Text strong>{description}</Text>
    </Flex>
  );
};
