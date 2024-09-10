import type { PaginationResponse } from '@/shared/types';
import type { Advertisment, ShortAdvertisment } from './advertisment';

export type GetAdvertismentsResponse = PaginationResponse & {
  data: ShortAdvertisment[];
};

export type GetAdvertismentResponse = Advertisment;
