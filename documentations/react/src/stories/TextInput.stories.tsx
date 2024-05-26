import type { Meta, StoryObj } from "@storybook/react";
import { Box, Text, Input, InputProps } from "@saturn/app-react";

export default {
  title: "Form/Text Input",
  component: Input,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<InputProps>;

export const Primary: StoryObj<InputProps> = {
  args: {
    placeholder: "Type your name",
  },
};

export const Disabled: StoryObj<InputProps> = {
  args: {
    disabled: true,
  },
};

export const WithPrefix: StoryObj<InputProps> = {
  args: {
    prefix: "cal.com/",
    placeholder: "username",
  },
};
