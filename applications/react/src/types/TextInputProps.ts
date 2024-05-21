import { ComponentProps } from "react";
import { Input } from "../components/TextInput/styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}
