import { Menu } from 'antd';
import type { HomeMenuProps } from './homeMenu.types';
import type { ItemType } from 'antd/es/menu/interface';
import { LuBoxes, LuClipboardList } from 'react-icons/lu';
import { Link, useLocation } from 'react-router-dom';
import { ROUTER_PATHS } from '@/shared/constants';

const items: ItemType[] = [
  {
    key: ROUTER_PATHS.HOME + ROUTER_PATHS.ADVERTISEMENTS,
    label: <Link to={ROUTER_PATHS.ADVERTISEMENTS}>Объявления</Link>,
    icon: <LuClipboardList />,
  },
  {
    key: ROUTER_PATHS.HOME + ROUTER_PATHS.ORDERS,
    label: <Link to={ROUTER_PATHS.ORDERS}>Заказы</Link>,
    icon: <LuBoxes />,
  },
];

export const HomeMenu = ({ className }: HomeMenuProps) => {
  const { pathname } = useLocation();
  return (
    <Menu
      items={items}
      selectedKeys={[pathname]}
      className={className}
      mode="horizontal"
      theme="dark"
    />
  );
};
