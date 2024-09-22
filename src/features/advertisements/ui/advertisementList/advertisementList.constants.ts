import type { ListGridType } from 'antd/es/list';

export const LOADING_MESSAGE = 'Загрузка объявлений...';

export const NOT_FOUND_MESSAGE = 'По вашему запросу нет объявлений';

export const ERROR_MESSAGE = 'Произошла ошибка при получении объявлений';

export const GRID_SETTINGS: ListGridType = {
  gutter: 16,
  xs: 1,
  sm: 1,
  md: 2,
  lg: 3,
  xl: 3,
  xxl: 3,
};
