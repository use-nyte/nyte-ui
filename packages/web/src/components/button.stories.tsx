import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"]
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Continue"
  }
};

export const Disabled: Story = {
  args: {
    label: "Continue",
    disabled: true
  }
};

export const Loading: Story = {
  args: {
    label: "Loading...",
    loading: true
  }
};
