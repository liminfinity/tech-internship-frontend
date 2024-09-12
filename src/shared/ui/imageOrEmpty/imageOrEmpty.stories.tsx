import type { Meta, StoryObj } from '@storybook/react';
import { ImageOrEmpty } from './imageOrEmpty';
import { faker } from '@faker-js/faker';

const meta = {
  component: ImageOrEmpty,
  title: 'Shared/ImageOrEmpty',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ImageOrEmpty>;

type Story = StoryObj<typeof ImageOrEmpty>;

export const ImageOrEmptyDefault: Story = {
  args: {
    src: faker.image.url(),
  },
};

export const ImageOrEmptyWithoutImage: Story = {};

export default meta;
