import { createApi } from '@reduxjs/toolkit/query/react';
import { API_PATHS, KEEP_UNUSED_DATA_FOR, REDUCER_API_PATH, TAGS } from './constants';
import { baseQuery, METHODS } from '@/shared/api';
import type {
  AddAdvertisementRequest,
  AddAdvertisementResponse,
  GetAdvertisementResponse,
  GetAdvertisementsRequest,
  GetAdvertisementsResponse,
  UpdateAdvertisementRequest,
} from '../types';
import { joinPaths } from '@/shared/lib';
import { toParamsRequest } from '../lib';
import snakify from 'snakify-ts';

const TAG_TYPES = Object.values(TAGS);

export const advertisementApi = createApi({
  reducerPath: REDUCER_API_PATH,
  baseQuery: baseQuery,
  keepUnusedDataFor: KEEP_UNUSED_DATA_FOR,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: TAG_TYPES,
  endpoints: (builder) => ({
    getAdvertisements: builder.query<GetAdvertisementsResponse, GetAdvertisementsRequest>({
      query: (params) => ({
        url: API_PATHS.GET_ADVERTISEMENTS,
        params: toParamsRequest(snakify(params), {
          underscoreItems: ['page', 'per_page'],
        }),
      }),
      providesTags: (_result, _error, params) => [
        { type: TAGS.ADVERTISEMENTS, id: JSON.stringify(params) },
      ],
    }),
    getAdvertisement: builder.query<GetAdvertisementResponse, string>({
      query: (advertisementId) => ({
        url: joinPaths(API_PATHS.GET_ADVERTISEMENT, advertisementId),
      }),
      providesTags: (_result, _error, advertisementId) => [
        { type: TAGS.ADVERTISEMENTS, id: advertisementId },
      ],
    }),
    addAdvertisement: builder.mutation<AddAdvertisementResponse, AddAdvertisementRequest>({
      query: (newAdvertisement) => ({
        url: API_PATHS.ADD_ADVERTISEMENT,
        method: METHODS.POST,
        body: newAdvertisement,
      }),
      invalidatesTags: [TAGS.ADVERTISEMENTS],
    }),
    updateAdvertisement: builder.mutation<void, UpdateAdvertisementRequest>({
      query: (updatedAdvertisement) => ({
        url: API_PATHS.UPDATE_ADVERTISEMENT,
        method: METHODS.PATCH,
        body: updatedAdvertisement,
      }),
      invalidatesTags: [TAGS.ADVERTISEMENTS],
    }),
  }),
});

export const {
  useGetAdvertisementsQuery,
  useGetAdvertisementQuery,
  useAddAdvertisementMutation,
  useUpdateAdvertisementMutation,
} = advertisementApi;
