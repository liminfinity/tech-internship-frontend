import type { SpaceProps } from 'antd';
import type { ReactNode } from 'react';

export type IconTextProps = SpaceProps & {
  text: string;
  icon: ReactNode;
};
