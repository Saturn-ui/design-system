import { ComponentProps, ElementType } from "react";
import { Box } from "../components/Box";

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType;
}
