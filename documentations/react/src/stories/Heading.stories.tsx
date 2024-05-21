import { Heading, HeadingProps } from "@saturn/app-react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Titulo customizado",
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "Strong Heading",
    as: "h1",
  },
  parameters: {
    docs: {
      desciption: {
        story:
          "Por padrão o Heading sempre sera um `h2`, mas podemos alterar com a propriedade `as`",
      },
    },
  },
};
