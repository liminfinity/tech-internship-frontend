import { createApi } from '@reduxjs/toolkit/query/react';
import { API_PATHS, KEEP_UNUSED_DATA_FOR, REDUCER_API_PATH, TAGS } from './constants';
import { baseQuery } from '@/shared/api';
import type { GetOrdersRequest, GetOrdersResponse, GetTransformedOrdersResponse } from '../types';
import { toParamsRequest } from '@/shared/lib';
import snakify from 'snakify-ts';
import { transformOrdersResponse } from '../lib';

export const orderApi = createApi({
  reducerPath: REDUCER_API_PATH,
  baseQuery: baseQuery,
  keepUnusedDataFor: KEEP_UNUSED_DATA_FOR,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: [TAGS.ORDERS],
  endpoints: (builder) => ({
    getOrders: builder.query<GetTransformedOrdersResponse, GetOrdersRequest>({
      query: (params) => ({
        url: API_PATHS.GET_ORDERS,
        params: toParamsRequest(snakify(params), {
          underscoreItems: ['page', 'per_page', 'sort'],
        }),
      }),
      transformResponse: (res: GetOrdersResponse) => transformOrdersResponse(res),
      providesTags: (_result, _error, params) => [
        { type: TAGS.ORDERS, id: JSON.stringify(params) },
      ],
    }),
  }),
});

export const { useGetOrdersQuery } = orderApi;
