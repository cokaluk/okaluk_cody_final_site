import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RadioButton } from './radioButton';



const meta = {
  title: 'Example/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
    onChange: { action: 'clicked' },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'disabled',
    name: 'disabled',
    value: 'disabled',
  },
};

export const Enabled: Story = {
  args: {
    disabled: false,
    label: 'enabled',
    name: 'enabled',
    value: 'enabled',
  },
};

export const MultipleRadios: Story = {
  args: {
    label: 'Option 1',
    name: 'group1',
    value: 'option1',
    disabled: false,
    checked: false,
  },
  render: () => {
    const[selected, setSelected] = useState('option1');

    return (
      <div>
        <h3>Select an option</h3>
        <RadioButton
          label="Option 1"
          name="group 1"
          value="option1"
          checked={selected === 'option1'}
          onChange={() => setSelected('option1')}
        />

        <RadioButton
          label="Option 2"
          name="group 1"
          value="option2"
          checked={selected === 'option2'}
          onChange={() => setSelected('option2')}
        />

      </div>
    );
  },
};