import type { Meta, StoryObj } from '@storybook/react';
import { Views } from './views';
import { faker } from '@faker-js/faker';

const meta = {
  component: Views,
  title: 'Shared/Views',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Views>;

type Story = StoryObj<typeof Views>;

export const ViewsDefault: Story = {
  args: {
    viewsCnt: faker.number.int(),
  },
};

export default meta;
