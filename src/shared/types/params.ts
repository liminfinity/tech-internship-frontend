import type { BasePerPage } from '../constants';

export type BaseSearchParams = Partial<{
  _page: number;
  _per_page: BasePerPage;
}>;
