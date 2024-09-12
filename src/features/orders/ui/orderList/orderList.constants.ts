import type { ListGridType } from 'antd/es/list';

export const LOADING_MESSAGE = 'Загрузка заказов...';

export const NOT_FOUND_MESSAGE = 'По вашему запросу нет заказов';

export const ERROR_MESSAGE = 'Произошла ошибка при получении заказов';

export const GRID_SETTINGS: ListGridType = {
  gutter: 16,
  xs: 1,
  sm: 2,
  md: 4,
  lg: 4,
  xl: 6,
  xxl: 3,
};
