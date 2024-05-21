import { ComponentProps, ElementType } from "react";
import { Text } from "../components/Text";

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType;
}
