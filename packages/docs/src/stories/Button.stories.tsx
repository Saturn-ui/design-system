import { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@saturn/react";
import { FaBeer } from "react-icons/fa";

export default {
  title: "Form/Button",
  args: {
    children: "Enviar",
    type: "primary",
    size: "big",
  },
  argTypes: {
    onClick: {
      action: "click",
    },
    type: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["big", "small"],
      control: {
        type: "inline-radio",
      },
    },
    radii: {
      options: ["rounded", "roundedFull"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      type: "boolean",
    },
  },
  component: Button,
} as Meta<ButtonProps>;

export const Principal: StoryObj<ButtonProps> = {
  args: {
    children: "Principal",
    size: "big",
    type: "primary",
  },
};

export const Secundário: StoryObj<ButtonProps> = {
  args: {
    children: "Secundário",
    size: "big",
    type: "secondary",
  },
};

export const Terciário: StoryObj<ButtonProps> = {
  args: {
    children: "Terciário",
    size: "big",
    type: "tertiary",
  },
};

export const ComIcone: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <FaBeer />
        Icone
      </>
    ),
    size: "big",
    type: "primary",
  },
};

export const Ícone: StoryObj<ButtonProps> = {
  args: {
    children: <FaBeer />,
    size: "big",
    type: "primary",
    radii: "roundedFull",
    style: { width: '56px', height: '58px' }
  },
};
