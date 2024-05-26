import { Box, BoxProps, Text } from "@saturn/app-react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <Text>Testando o elemento box</Text>
      </>
    ),
    argTypes: {
      children: {
        control: {
          type: null,
        },
      },
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
