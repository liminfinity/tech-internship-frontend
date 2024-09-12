export type Glthe<T extends string, K> = {
  [key in `${T}Gte` | `${T}Lte`]: K;
};
