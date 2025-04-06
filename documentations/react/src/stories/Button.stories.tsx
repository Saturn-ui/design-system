import { Button } from "@saturn/app-react";
import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight } from "phosphor-react";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Send",
    variant: "primary",
    size: "md",
    color: "default",
    radius: "default",
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["sm", "md"],
      control: {
        type: "inline-radio",
      },
    },
    color: {
      options: ["default", "primary", "secondary", "destructive", "accent"],
      control: {
        type: "select",
      },
    },
    radius: {
      options: ["default", "sm", "md", "lg", "full"],
      control: {
        type: "select",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onClick: { action: "clicked" },
  },
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    variant: "secondary",
    children: "Create new",
  },
};

export const Tertiary: StoryObj<typeof Button> = {
  args: {
    variant: "tertiary",
    children: "Cancel",
  },
};

export const Small: StoryObj<typeof Button> = {
  args: {
    size: "sm",
  },
};

export const WithIcon: StoryObj<typeof Button> = {
  args: {
    children: (
      <>
        Next Step
        <ArrowRight weight="bold" />
      </>
    ),
  },
};

export const CustomColor: StoryObj<typeof Button> = {
  args: {
    color: "primary",
    children: "Primary Color",
  },
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    disabled: true,
  },
};
