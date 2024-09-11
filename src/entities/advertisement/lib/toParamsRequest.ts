import type { AddUnderscoreToKeys } from '@/shared/types';

type Options<T> = {
  underscoreItems?: T[];
};

//FIXME: Решить проблемы типов
export const toParamsRequest = <T extends object, K extends keyof T>(
  request: T,
  { underscoreItems }: Options<K>,
) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const formattedRequest: AddUnderscoreToKeys<T, K> = {};
  if (underscoreItems?.length) {
    const underscoreSet = new Set(underscoreItems);
    for (const key in request) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (underscoreSet.has(key)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        formattedRequest[`_${key}`] = request[key as keyof T];
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        formattedRequest[key] = request[key as keyof T];
      }
    }
  }
  return formattedRequest;
};
