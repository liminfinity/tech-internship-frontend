import type { Meta, StoryObj } from '@storybook/react';
import { AdvertisementDetails } from './advertisementDetails';
import { withRouter } from 'storybook-addon-remix-react-router';
import { faker } from '@faker-js/faker';

const meta = {
  component: AdvertisementDetails,
  decorators: [withRouter],
  title: 'Entities/Advertisement/AdvertisementDetails',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AdvertisementDetails>;

type Story = StoryObj<typeof AdvertisementDetails>;

export const AdvertisementCardDefault: Story = {
  args: {
    details: {
      price: +faker.commerce.price(),
      views: faker.number.int(),
      likes: faker.number.int(),
      createdAt: faker.date.anytime().toISOString(),
    },
  },
};

export default meta;
