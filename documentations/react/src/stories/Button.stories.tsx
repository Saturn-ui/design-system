import { Button, ButtonProps } from "@saturn/app-react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Enviar",
  },
} as Meta;

export const Primary: StoryObj<ButtonProps> = {};

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: "big",
  },
};
