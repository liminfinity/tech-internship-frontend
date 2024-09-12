import type { FlexProps } from 'antd';

export type PendingErrorGuardProps = FlexProps & {
  isError: boolean;
  isPending: boolean;
  errorMessage?: string;
  pendingMessage?: string;
};
