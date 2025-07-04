import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn, expect } from "storybook/test";
import { ChevronRightIcon } from "lucide-react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    className: "m-4",
    children: "Click me",
    type: "button",
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  play: async ({ args, canvas, userEvent }) => {
    const button = await canvas.findByRole("button");
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};

export const Icon: Story = {
  args: {
    variant: "secondary",
  },
  render: (args) => (
    <Button {...args}>
      <ChevronRightIcon />
    </Button>
  ),
};

export const WithIcon: Story = {
  args: {
    variant: "secondary",
  },
  render: (args) => (
    <Button {...args}>
      <ChevronRightIcon /> {args.children}
    </Button>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
