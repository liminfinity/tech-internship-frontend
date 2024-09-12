import type { Meta, StoryObj } from '@storybook/react';
import { IconText } from './iconText';
import { faker } from '@faker-js/faker';
import { AiOutlineLike } from 'react-icons/ai';

const meta = {
  component: IconText,
  title: 'Shared/IconText',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof IconText>;

type Story = StoryObj<typeof IconText>;

export const IconTextDefault: Story = {
  args: {
    icon: <AiOutlineLike />,
    text: faker.string.numeric({ length: 3 }),
  },
};

export default meta;
