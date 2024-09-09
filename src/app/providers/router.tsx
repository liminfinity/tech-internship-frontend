import { RouterProvider as ReactRouterProvider } from 'react-router-dom';
import { getRouter } from '../lib';

export const RouterProvider = () => {
  const router = getRouter();

  return <ReactRouterProvider router={router} />;
};
