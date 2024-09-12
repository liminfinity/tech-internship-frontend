import type { Meta, StoryObj } from '@storybook/react';
import { OrderItems } from './orderItems';
import { withRouter } from 'storybook-addon-remix-react-router';
import { faker } from '@faker-js/faker';

const meta = {
  component: OrderItems,
  decorators: [withRouter],
  title: 'Entities/Order/OrderItems',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof OrderItems>;

type Story = StoryObj<typeof OrderItems>;

export const OrderItemsDefault: Story = {
  args: {
    orderItems: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, () => ({
      id: faker.string.numeric(),
      name: faker.commerce.productName(),
      price: +faker.commerce.price(),
      views: faker.number.int(),
      likes: faker.number.int(),
      count: faker.number.int(),
      createdAt: faker.date.anytime().toISOString(),
    })),
  },
};

export default meta;
