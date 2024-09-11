import type { Meta, StoryObj } from '@storybook/react';
import { AdvertisementCard } from './advertisementCard';
import { withRouter } from 'storybook-addon-remix-react-router';
import { faker } from '@faker-js/faker';

const meta = {
  component: AdvertisementCard,
  decorators: [withRouter],
  title: 'Entities/Advertisement/AdvertisementCard',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AdvertisementCard>;

type Story = StoryObj<typeof AdvertisementCard>;

export const AdvertisementCardDefault: Story = {
  args: {
    advertisement: {
      id: faker.string.numeric(),
      name: faker.commerce.productName(),
      price: +faker.commerce.price(),
      views: faker.number.int(),
      likes: faker.number.int(),
      imageUrl: faker.image.url(),
    },
  },
};

export const AdvertisementCardWithoutImage: Story = {
  args: {
    advertisement: {
      id: faker.string.numeric(),
      name: faker.commerce.productName(),
      price: +faker.commerce.price(),
      views: faker.number.int(),
      likes: faker.number.int(),
    },
  },
};

export default meta;
