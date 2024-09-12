import type { Meta, StoryObj } from '@storybook/react';
import { OrderCard } from './orderCard';
import { withRouter } from 'storybook-addon-remix-react-router';
import { faker } from '@faker-js/faker';
import { ORDER_STATUS } from '../../constants';

const meta = {
  component: OrderCard,
  decorators: [withRouter],
  title: 'Entities/Order/OrderCard',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof OrderCard>;

type Story = StoryObj<typeof OrderCard>;

export const OrderCardDefault: Story = {
  args: {
    order: {
      id: faker.string.numeric(),
      total: +faker.commerce.price(),
      createdAt: faker.date.anytime().toISOString(),
      status: faker.helpers.arrayElement(Object.values(ORDER_STATUS)),
      deliveryWay: faker.helpers.arrayElement(['Почта', 'СДЭК']),
      items: [
        {
          id: faker.string.numeric(),
          name: faker.commerce.productName(),
          price: +faker.commerce.price(),
          views: faker.number.int(),
          likes: faker.number.int(),
          count: faker.number.int(),
          createdAt: faker.date.anytime().toISOString(),
        },
      ],
    },
  },
};

export const OrderFinishedCard: Story = {
  args: {
    order: {
      id: faker.string.numeric(),
      total: +faker.commerce.price(),
      createdAt: faker.date.anytime().toISOString(),
      finishedAt: faker.date.anytime().toISOString(),
      status: faker.helpers.arrayElement(Object.values(ORDER_STATUS)),
      deliveryWay: faker.helpers.arrayElement(['Почта', 'СДЭК']),
      items: [
        {
          id: faker.string.numeric(),
          name: faker.commerce.productName(),
          price: +faker.commerce.price(),
          views: faker.number.int(),
          likes: faker.number.int(),
          count: faker.number.int(),
          createdAt: faker.date.anytime().toISOString(),
        },
      ],
    },
  },
};

export default meta;
