import { advertisementApi } from '@/entities/advertisement';
import { orderApi } from '@/entities/order';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const mainReducer = combineReducers({
  [advertisementApi.reducerPath]: advertisementApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
});

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(advertisementApi.middleware, orderApi.middleware),
});
