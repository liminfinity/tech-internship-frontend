import { HomeHeader } from '@/widgets/homeHeader';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import styles from './homeLayout.module.scss';

export const HomeLayout = () => {
  return (
    <Layout className={styles.layout}>
      <HomeHeader />
      <Outlet />
    </Layout>
  );
};
