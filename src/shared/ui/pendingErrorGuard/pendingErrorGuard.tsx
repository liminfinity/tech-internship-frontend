import type { PendingErrorGuardProps } from './pendingErrorGuard.types';
import { ErrorPanel } from '../errorPanel';
import { Flex, Spin, Typography } from 'antd';
import { GAPS } from '@/shared/constants';

const { Text } = Typography;

export const PendingErrorGuard = ({
  children,
  isError,
  isPending,
  errorMessage,
  pendingMessage = 'Загрузка',
  ...props
}: PendingErrorGuardProps) => {
  return (
    <Flex vertical justify="center" {...props}>
      {isPending && (
        <Flex vertical justify="center" align="center" gap={GAPS.MD}>
          <Spin size="large" />
          <Text strong>{pendingMessage}</Text>
        </Flex>
      )}
      {isError && <ErrorPanel description={errorMessage} />}
      {!isPending && !isError && children}
    </Flex>
  );
};
