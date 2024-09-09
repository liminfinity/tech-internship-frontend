import type { BaseEntity } from './baseEntity';

export type Image = BaseEntity & {
  /* Ссылка. */
  url: string;
  /* Название. */
  name: string;
};
