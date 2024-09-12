import type { Meta, StoryObj } from '@storybook/react';
import { AdvertisementInfo } from './advertisementInfo';
import { withRouter } from 'storybook-addon-remix-react-router';
import { faker } from '@faker-js/faker';

const meta = {
  component: AdvertisementInfo,
  decorators: [withRouter],
  title: 'Entities/Advertisement/AdvertisementInfo',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AdvertisementInfo>;

type Story = StoryObj<typeof AdvertisementInfo>;

export const AdvertisementInfoDefault: Story = {
  args: {
    info: {
      name: faker.commerce.productName(),
      imageUrl: faker.image.url(),
      description: faker.commerce.productDescription(),
    },
  },
};

export const AdvertisementInfoWithoutImage: Story = {
  args: {
    info: {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
    },
  },
};

export const AdvertisementInfoWithoutDescription: Story = {
  args: {
    info: {
      name: faker.commerce.productName(),
      imageUrl: faker.image.url(),
    },
  },
};

export default meta;
