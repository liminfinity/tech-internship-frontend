import type { ListGridType } from 'antd/es/list';

export const LOADING_MESSAGE = 'Загрузка объявлений...';

export const NOT_FOUND_MESSAGE = 'По вашему запросу нет объявлений';

export const ERROR_MESSAGE = 'Произошла ошибка при получении объявлений';

export const GRID_SETTINGS: ListGridType = {
  gutter: 16,
  xs: 1,
  sm: 2,
  md: 4,
  lg: 4,
  xl: 6,
  xxl: 3,
};
