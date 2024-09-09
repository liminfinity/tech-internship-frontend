import { ROUTER_PATHS } from '@/shared/constants';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';

export const getRouter = () => {
  const router: RouteObject[] = [];
  router.push(
    {
      path: '*',
      element: <Navigate to={ROUTER_PATHS.ADVERTISMENTS} />,
    },
    {
      path: ROUTER_PATHS.HOME,
      element: (
        <div>
          Шапка главной <Outlet />
        </div>
      ),
      children: [
        {
          path: ROUTER_PATHS.ADVERTISMENTS,
          element: <div>Объявления</div>,
        },
        {
          path: ROUTER_PATHS.ADVERTISMENT,
          element: <div>Объявление</div>,
        },
        {
          path: ROUTER_PATHS.ORDERS,
          element: <div>Заказы</div>,
        },
      ],
    },
  );

  return createBrowserRouter(router);
};
