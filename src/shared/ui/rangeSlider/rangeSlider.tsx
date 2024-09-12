import { Flex, Slider, Typography } from 'antd';
import type { RangeSliderProps } from './rangeSlider.types';
import { GAPS } from '@/shared/constants';
import styles from './rangeSlider.module.scss';
import { cn } from '@/shared/lib';

const { Text } = Typography;

export const RangeSlider = ({ label, min, max, className, ...props }: RangeSliderProps) => {
  return (
    <Flex vertical gap={GAPS.SM}>
      {label && <Text>{label}</Text>}
      <Flex align="center" gap={GAPS.SM}>
        {min && <Text>{min}</Text>}
        <Slider
          range={{ draggableTrack: true }}
          min={min}
          max={max}
          className={cn(styles.slider, className)}
          {...props}
        />
        {max && <Text>{max}</Text>}
      </Flex>
    </Flex>
  );
};
