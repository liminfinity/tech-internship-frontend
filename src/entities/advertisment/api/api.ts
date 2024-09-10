import { createApi } from '@reduxjs/toolkit/query/react';
import { API_PATHS, KEEP_UNUSED_DATA_FOR, REDUCER_API_PATH, TAGS } from './constants';
import { baseQuery } from '@/shared/api';
import type {
  AddAdvertismentRequest,
  GetAdvertismentResponse,
  GetAdvertismentsRequest,
  GetAdvertismentsResponse,
  UpdateAdvertismentRequest,
} from '../types';
import { joinPaths } from '@/shared/lib';

const TAG_TYPES = Object.values(TAGS);

export const advertismentApi = createApi({
  reducerPath: REDUCER_API_PATH,
  baseQuery: baseQuery,
  keepUnusedDataFor: KEEP_UNUSED_DATA_FOR,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: TAG_TYPES,
  endpoints: (builder) => ({
    getAdvertisments: builder.query<GetAdvertismentsResponse, GetAdvertismentsRequest>({
      query: (params) => ({
        url: API_PATHS.GET_ADVERTISMENTS,
        params,
      }),
      providesTags: (_result, _error, params) => [
        { type: TAGS.ADVERTISMENTS, id: JSON.stringify(params) },
      ],
    }),
    getAdvertisment: builder.query<GetAdvertismentResponse, string>({
      query: (advertismentId) => ({
        url: joinPaths(API_PATHS.GET_ADVERTISMENT, advertismentId),
      }),
      providesTags: (_result, _error, advertismentId) => [
        { type: TAGS.ADVERTISMENTS, id: advertismentId },
      ],
    }),
    addAdvertisment: builder.mutation<void, AddAdvertismentRequest>({
      query: (newAdvertisment) => ({
        url: API_PATHS.ADD_ADVERTISMENT,
        method: 'POST',
        body: newAdvertisment,
      }),
      invalidatesTags: [TAGS.ADVERTISMENTS],
    }),
    updateAdvertisment: builder.mutation<void, UpdateAdvertismentRequest>({
      query: (updatedAdvertisment) => ({
        url: API_PATHS.UPDATE_ADVERTISMENT,
        method: 'PATCH',
        body: updatedAdvertisment,
      }),
      invalidatesTags: [TAGS.ADVERTISMENTS],
    }),
  }),
});

export const {
  useGetAdvertismentsQuery,
  useGetAdvertismentQuery,
  useAddAdvertismentMutation,
  useUpdateAdvertismentMutation,
} = advertismentApi;
