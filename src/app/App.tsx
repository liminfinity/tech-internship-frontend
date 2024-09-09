import { ReduxProvider, RouterProvider } from './providers';

export const App = () => {
  return (
    <ReduxProvider>
      <RouterProvider />
    </ReduxProvider>
  );
};
