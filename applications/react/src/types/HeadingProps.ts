import { ComponentProps, ElementType } from "react";
import { Heading } from "../components/Heading";

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType;
}
