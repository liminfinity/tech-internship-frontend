import type { BasePerPage } from '../constants';

export type BaseSearchParams = Partial<{
  page: number;
  perPage: BasePerPage;
}>;
