import { Layout } from 'antd';
import type { HomeHeaderProps } from './homeHeader.types';
import { HomeMenu } from './ui';
import { cn } from '@/shared/lib';
import styles from './homeHeader.module.scss';
import { AddAdvertisementButton } from '@/features/addAdvertisement';

const { Header } = Layout;

export const HomeHeader = ({ className }: HomeHeaderProps) => {
  return (
    <Header className={cn(styles.header, className)}>
      <HomeMenu className={styles.menu} />
      <AddAdvertisementButton />
    </Header>
  );
};
