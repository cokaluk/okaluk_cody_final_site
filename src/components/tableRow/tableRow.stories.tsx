import type { Meta, StoryObj } from "@storybook/react";

import { TableRow } from "./tableRow";
import { TableCell } from "../tableCell/tableCell";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/TableRow",
  component: TableRow,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof TableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {
    disabled: true,
    cells: [
      <TableCell key={1} text="Disabled Row 1, Col 1" />,
      <TableCell key={1} text="Disabled Row 1, Col 2" />,
      <TableCell key={1} text="Disabled Row 1, Col 3" />,
    ],
  },
};

export const Enabled: Story = {
  args: {
    disabled: false,
    cells: [
      <TableCell key={1} text="Enabled Row 1, Col 1" />,
      <TableCell key={1} text="Enabled Row 1, Col 2" />,
      <TableCell key={1} text="Enabled Row 1, Col 3" />,
    ],
  },
};
