import { createApi } from '@reduxjs/toolkit/query/react';
import { KEEP_UNUSED_DATA_FOR, REDUCER_API_PATH } from './constants';
import { baseQuery } from '@/shared/api';

export const advertismentApi = createApi({
  reducerPath: REDUCER_API_PATH,
  baseQuery: baseQuery,
  keepUnusedDataFor: KEEP_UNUSED_DATA_FOR,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
