import type { Meta, StoryObj } from '@storybook/react';
import { HomeHeader } from './homeHeader';
import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router';
import { ROUTER_PATHS } from '@/shared/constants';

const meta = {
  component: HomeHeader,
  decorators: [withRouter],
  title: 'Widgets/HomeHeader',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    reactRouter: reactRouterParameters({
      routing: {
        path: ROUTER_PATHS.HOME + ROUTER_PATHS.ADVERTISEMENTS,
      },
    }),
  },
} satisfies Meta<typeof HomeHeader>;

type Story = StoryObj<typeof HomeHeader>;

export const HomeHeaderDefault: Story = {};

export default meta;
