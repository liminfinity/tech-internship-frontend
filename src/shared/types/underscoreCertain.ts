export type AddUnderscoreToKeys<T, K extends keyof T> = {
  [P in keyof T as P extends K ? `_${P & string}` : P]: T[P];
};
