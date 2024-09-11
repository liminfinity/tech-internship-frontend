import type { DefaultProps } from '@/shared/types';
import type { ReactNode } from 'react';

export type ErrorPanelProps = DefaultProps & {
  description?: ReactNode;
};
