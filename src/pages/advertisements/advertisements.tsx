import { Layout } from 'antd';
import styles from './advertisements.module.scss';
import { AdvertisementsPanel } from '@/widgets/advertisementsPanel';

const { Content } = Layout;

export const AdvertisementsPage = () => {
  return (
    <Content className={styles.layout}>
      <AdvertisementsPanel />
    </Content>
  );
};
