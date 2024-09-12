import type { Meta, StoryObj } from '@storybook/react';
import { OrderItem } from './orderItem';
import { withRouter } from 'storybook-addon-remix-react-router';
import { faker } from '@faker-js/faker';

const meta = {
  component: OrderItem,
  decorators: [withRouter],
  title: 'Entities/Order/OrderItem',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof OrderItem>;

type Story = StoryObj<typeof OrderItem>;

export const OrderItemDefault: Story = {
  args: {
    orderItem: {
      id: faker.string.numeric(),
      name: faker.commerce.productName(),
      price: +faker.commerce.price(),
      views: faker.number.int(),
      likes: faker.number.int(),
      count: faker.number.int(),
      createdAt: faker.date.anytime().toISOString(),
    },
  },
};

export default meta;
