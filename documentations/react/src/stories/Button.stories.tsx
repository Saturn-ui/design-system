import { Button } from "@saturn/app-react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Enviar",
  },
} as Meta;

export const Primary: StoryObj = {};

export const Big: StoryObj = {
  args: {
    size: "big",
  },
};
