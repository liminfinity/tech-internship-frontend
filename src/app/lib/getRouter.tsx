import { AdvertisementPage } from '@/pages/advertisement';
import { AdvertisementsPage } from '@/pages/advertisements';
import { HomeLayout } from '@/pages/homeLayout';
import { OrdersPage } from '@/pages/orders';
import { ROUTER_PATHS } from '@/shared/constants';
import { joinPaths } from '@/shared/lib';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const getRouter = () => {
  const router: RouteObject[] = [];
  router.push(
    {
      path: '*',
      element: <Navigate to={ROUTER_PATHS.ADVERTISEMENTS} />,
    },
    {
      path: ROUTER_PATHS.HOME,
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Navigate to={ROUTER_PATHS.ADVERTISEMENTS} />,
        },
        {
          path: ROUTER_PATHS.ADVERTISEMENTS,
          element: <AdvertisementsPage />,
        },
        {
          path: joinPaths(ROUTER_PATHS.ADVERTISEMENTS, ROUTER_PATHS.ADVERTISEMENT),
          element: <AdvertisementPage />,
        },
        {
          path: ROUTER_PATHS.ORDERS,
          element: <OrdersPage />,
        },
      ],
    },
  );

  return createBrowserRouter(router);
};
