import type { Meta, StoryObj } from '@storybook/react';
import { ErrorPanel } from './errorPanel';

const meta = {
  component: ErrorPanel,
  title: 'Shared/ErrorPanel',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ErrorPanel>;

type Story = StoryObj<typeof ErrorPanel>;

export const ErrorPanelDefault: Story = {
  args: {},
};

export default meta;
