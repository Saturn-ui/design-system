import { Avatar, AvatarProps } from "@saturn/app-react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    src: "https://github.com/kevinDsousa.png",
    alt: "Kevin Sousa",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
