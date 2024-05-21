import { ComponentProps, ElementType } from "react";
import { Button } from "../components/Button";

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}
