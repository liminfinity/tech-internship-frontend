import type { DefaultOptionType } from 'antd/es/select';

export const createOptions = <T extends object>(obj: T): DefaultOptionType[] => {
  return Object.entries(obj).map(([key, value]) => ({ label: key, value }));
};
