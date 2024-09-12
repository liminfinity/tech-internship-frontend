import type { SliderRangeProps } from 'antd/es/slider';

export type RangeSliderProps = Omit<SliderRangeProps, 'range'> & {
  label?: string;
};
