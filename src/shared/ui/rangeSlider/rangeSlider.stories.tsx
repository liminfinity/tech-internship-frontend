import type { Meta, StoryObj } from '@storybook/react';
import { RangeSlider } from './rangeSlider';
import { faker } from '@faker-js/faker';

const meta = {
  component: RangeSlider,
  title: 'Shared/RangeSlider',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RangeSlider>;

type Story = StoryObj<typeof RangeSlider>;

export const RangeSliderDefault: Story = {
  args: {
    label: faker.lorem.word(),
    min: 0,
    max: 10,
  },
};

export default meta;
