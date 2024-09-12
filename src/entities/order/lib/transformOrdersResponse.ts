import type { GetOrdersResponse } from '../types';

export const transformOrdersResponse = (res: GetOrdersResponse) => {
  let totalCount = 0;
  for (const order of res.data) {
    for (const advertisement of order.items) {
      totalCount += advertisement.count;
    }
  }

  return { ...res, totalCount };
};
