export const REDUCER_API_PATH = 'orderApi';

export const BASE_URL = 'orders';

export const KEEP_UNUSED_DATA_FOR = 10 * 60; // 10 minutes

export const API_PATHS = {
  GET_ORDERS: BASE_URL,
} as const;

export const TAGS = {
  ORDERS: 'orders',
} as const;
