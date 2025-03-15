import type { Meta, StoryObj } from '@storybook/react';

import computerImg from './computer.jpg';
import { Img } from './img';



const meta = {
  title: 'Example/Img',
  component: Img,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    width: { control: 'text' },
    height: { control: 'text' }
  },
} satisfies Meta<typeof Img>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {
    src: computerImg,
    disabled: true,
    alt: 'disabled img',
  },
};

export const Enabled: Story = {
  args: {
    src: computerImg,
    disabled: false,
    width: '250px',
    height: '250x',
    alt: 'enabled img',
  },
};