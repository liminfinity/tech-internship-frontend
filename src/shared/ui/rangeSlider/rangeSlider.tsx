import { Flex, Slider, Typography } from 'antd';
import type { RangeSliderProps } from './rangeSlider.types';
import { GAPS } from '@/shared/constants';
import styles from './rangeSlider.module.scss';
import { cn } from '@/shared/lib';
import type { Formatter } from 'antd/es/slider';

const { Text } = Typography;

const formatter: Formatter = (value) => value?.toLocaleString('ru-RU');

export const RangeSlider = ({ label, min, max, className, ...props }: RangeSliderProps) => {
  return (
    <Flex vertical gap={GAPS.SM}>
      {label && <Text>{label}</Text>}
      <Flex align="center" gap={GAPS.SM}>
        {min && <Text>{min.toLocaleString('ru-RU')}</Text>}
        <Slider
          range={{ draggableTrack: true }}
          tooltip={{ formatter }}
          min={min}
          max={max}
          className={cn(styles.slider, className)}
          {...props}
        />
        {max && <Text>{max.toLocaleString('ru-RU')}</Text>}
      </Flex>
    </Flex>
  );
};
