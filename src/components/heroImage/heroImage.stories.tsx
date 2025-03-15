import type { Meta, StoryObj } from "@storybook/react";
import { HeroImage } from "./heroImage";
import heroimg from "./heroimg.jpg";

const meta = {
  title: "Example/HeroImage",
  component: HeroImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    heading: { control: "text" },
    height: { control: "text" },
    subheading: { control: "text" },
  },
} satisfies Meta<typeof HeroImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {
    disabled: true,
    backgroundImage: heroimg,
    heading: "Disabled",
  },
};

export const Enabled: Story = {
  args: {
    disabled: false,
    backgroundImage: heroimg,
    heading: "Enabled",
  },
};
