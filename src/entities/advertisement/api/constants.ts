export const REDUCER_API_PATH = 'advertisementApi';

export const BASE_URL = 'advertisements';

export const KEEP_UNUSED_DATA_FOR = 10 * 60; // 10 minutes

export const API_PATHS = {
  GET_ADVERTISEMENTS: BASE_URL,
  GET_ADVERTISEMENT: BASE_URL,
  ADD_ADVERTISEMENT: BASE_URL,
  UPDATE_ADVERTISEMENT: BASE_URL,
} as const;

export const TAGS = {
  ADVERTISEMENTS: 'advertisements',
} as const;
