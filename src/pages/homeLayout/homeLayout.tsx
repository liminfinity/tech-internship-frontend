import { HomeHeader } from '@/widgets/homeHeader';
import { Flex, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import styles from './homeLayout.module.scss';
import { GAPS } from '@/shared/constants';

const { Content } = Layout;

export const HomeLayout = () => {
  return (
    <Layout className={styles.layout}>
      <Flex vertical gap={GAPS.XL}>
        <HomeHeader />
        <Content className={styles.content}>
          <div className={styles.container}>
            <Outlet />
          </div>
        </Content>
      </Flex>
    </Layout>
  );
};
