import type { Meta, StoryObj } from '@storybook/react';
import { Likes } from './likes';
import { faker } from '@faker-js/faker';

const meta = {
  component: Likes,
  title: 'Shared/Likes',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Likes>;

type Story = StoryObj<typeof Likes>;

export const LikesDefault: Story = {
  args: {
    likesCnt: faker.number.int(),
  },
};

export default meta;
