import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";

const meta = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Label",
  },
};

export const WithHtmlFor: Story = {
  args: {
    children: "Email",
    htmlFor: "email",
  },
};
