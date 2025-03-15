import type { Meta, StoryObj } from "@storybook/react";

import { TableHeader } from "./tableHeader";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/TableHeader",
  component: TableHeader,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: { control: "color" },
  },
} satisfies Meta<typeof TableHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {
    disabled: true,
    text: "this is some text",
  },
};

export const Enabled: Story = {
  args: {
    disabled: false,
    text: "this is some text",
  },
};
