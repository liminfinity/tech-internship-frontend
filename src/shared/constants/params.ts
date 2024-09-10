export const BASE_PER_PAGE = [10, 15, 20] as const;

export type BasePerPage = (typeof BASE_PER_PAGE)[number];
