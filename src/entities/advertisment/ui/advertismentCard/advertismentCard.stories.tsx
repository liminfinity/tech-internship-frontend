import type { Meta, StoryObj } from '@storybook/react';
import { AdvertismentCard } from './advertismentCard';
import { withRouter } from 'storybook-addon-remix-react-router';
import { faker } from '@faker-js/faker';

const meta = {
  component: AdvertismentCard,
  decorators: [withRouter],
  title: 'Entities/Advertisment/AdvertismentCard',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AdvertismentCard>;

type Story = StoryObj<typeof AdvertismentCard>;

export const AdvertismentCardDefault: Story = {
  args: {
    advertisment: {
      id: faker.string.numeric(),
      name: faker.commerce.productName(),
      price: +faker.commerce.price(),
      views: faker.number.int(),
      likes: faker.number.int(),
      imageUrl: faker.image.url(),
    },
  },
};

export const AdvertismentCardWithoutImage: Story = {
  args: {
    advertisment: {
      id: faker.string.numeric(),
      name: faker.commerce.productName(),
      price: +faker.commerce.price(),
      views: faker.number.int(),
      likes: faker.number.int(),
    },
  },
};

export default meta;
