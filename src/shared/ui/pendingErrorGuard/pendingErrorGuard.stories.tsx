import type { Meta, StoryObj } from '@storybook/react';
import { PendingErrorGuard } from './pendingErrorGuard';

const meta = {
  component: PendingErrorGuard,
  title: 'Shared/PendingErrorGuard',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PendingErrorGuard>;

type Story = StoryObj<typeof PendingErrorGuard>;

export const PendingErrorGuardDefault: Story = {
  args: {
    children: 'Контент',
  },
};

export const PendingErrorGuardPending: Story = {
  args: {
    isPending: true,
  },
};

export const PendingErrorGuardError: Story = {
  args: {
    isError: true,
  },
};

export default meta;
