import type { Meta, StoryObj } from "@storybook/react";

import { DropDown } from "./dropDown";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/DropDown",
  component: DropDown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    disabled: { control: "boolean" },
    label: { control: "text" },
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {
    label: "disabled DropDown",
    options: [
      { value: "disabled", label: "disabled" },
      { value: "disabled1", label: "disabled1" },
      { value: "disabled2", label: "disabled2" },
    ],
    disabled: true,
  },
};

export const Enabled: Story = {
  args: {
    label: "is this DropDown enabled?",
    options: [
      { value: "yup", label: "yup" },
      { value: "yes", label: "yes" },
      { value: "indeed", label: "indeed" },
    ],
    disabled: false,
  },
};
