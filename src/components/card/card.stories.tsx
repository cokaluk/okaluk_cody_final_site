import type { Meta, StoryObj } from '@storybook/react';

import { Card } from "./card";


const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    title: { control: 'text' },
    description: { control: 'text' },
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {
    disabled: true,
    title: 'Disabled',
    description: 'This is a disabled card component',
  },
};

export const Enabled: Story = {
  args: {
    disabled: false,
    title: 'Enabled',
    description: 'This is an enabled card component',
  },
};