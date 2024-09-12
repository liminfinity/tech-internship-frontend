import type { Meta, StoryObj } from '@storybook/react';
import { OrderItemsButton } from './orderItemsButton';
import { withRouter } from 'storybook-addon-remix-react-router';
import { faker } from '@faker-js/faker';

const meta = {
  component: OrderItemsButton,
  decorators: [withRouter],
  title: 'Entities/Order/OrderItemsButton',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof OrderItemsButton>;

type Story = StoryObj<typeof OrderItemsButton>;

export const OrderItemsButtonDefault: Story = {
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
