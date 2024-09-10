export const REDUCER_API_PATH = 'advertismentApi';

export const BASE_URL = 'advertisments';

export const KEEP_UNUSED_DATA_FOR = 10 * 60; // 10 minutes

export const API_PATHS = {
  GET_ADVERTISMENTS: BASE_URL,
  GET_ADVERTISMENT: BASE_URL,
  ADD_ADVERTISMENT: BASE_URL,
  UPDATE_ADVERTISMENT: BASE_URL,
} as const;

export const TAGS = {
  ADVERTISMENTS: 'advertisments',
} as const;
