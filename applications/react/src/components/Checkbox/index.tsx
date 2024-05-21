import { Check } from "phosphor-react";
import { CheckboxContainer, CheckboxIndicator } from "./styles";
import { CheckboxProps } from "../../types/CheckboxProps";

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  );
}
