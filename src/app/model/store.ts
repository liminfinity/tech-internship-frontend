import { advertismentApi } from '@/entities/advertisment';
import { orderApi } from '@/entities/order';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const mainReducer = combineReducers({
  [advertismentApi.reducerPath]: advertismentApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
});

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(advertismentApi.middleware, orderApi.middleware),
});
