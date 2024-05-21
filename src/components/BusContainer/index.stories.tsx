import BusContainer from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BusContainer> = {
  component: BusContainer,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof BusContainer>;

export const Primary: Story = {
  args: {
    isSoon: false,
  },
};

export const isSoon: Story = {
  args: {
    isSoon: true,
  },
};
