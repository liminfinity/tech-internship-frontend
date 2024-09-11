import { Layout } from 'antd';
import type { HomeHeaderProps } from './homeHeader.types';
import { HomeMenu } from './ui';
import { cn } from '@/shared/lib';
import styles from './homeHeader.module.scss';

const { Header } = Layout;

export const HomeHeader = ({ className }: HomeHeaderProps) => {
  return (
    <Header className={cn(styles.header, className)}>
      <HomeMenu className={styles.menu} />
    </Header>
  );
};
