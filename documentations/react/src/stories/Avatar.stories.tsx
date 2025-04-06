import { Avatar, AvatarProps } from "@saturn/app-react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/kevinDsousa.png",
    alt: "Kevin Sousa",
    size: "default",
    color: "default",
    radius: "default",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
    size: {
      control: {
        type: "select",
        options: ["default", "small", "medium", "large"],
      },
    },
    color: {
      control: {
        type: "select",
        options: Object.keys(require("../../../../../packages/tokens/src/colors").colors),
      },
    },
    radius: {
      control: {
        type: "select",
        options: Object.keys(require("../../../../../packages/tokens/src/radii").radii),
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
