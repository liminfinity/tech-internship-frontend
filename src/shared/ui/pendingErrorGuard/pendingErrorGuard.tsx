import type { PendingErrorGuardProps } from './pendingErrorGuard.types';
import { ErrorPanel } from '../errorPanel';
import { Empty, Flex, Spin } from 'antd';

export const PendingErrorGuard = ({
  children,
  isError,
  isPending,
  errorMessage,
  pendingMessage = 'Загрузка',
  ...props
}: PendingErrorGuardProps) => {
  return (
    <Flex vertical align="center" {...props}>
      {isPending && (
        <Spin tip={pendingMessage} size="large">
          {Empty.PRESENTED_IMAGE_DEFAULT}
        </Spin>
      )}
      {isError && <ErrorPanel description={errorMessage} />}
      {!isPending && !isError && children}
    </Flex>
  );
};
