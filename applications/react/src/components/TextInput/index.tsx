import { ElementRef, forwardRef } from "react";
import { TextInputProps } from "../../types/TextInputProps";
import { Input, Prefix, TextInputContainer } from "./styles";

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    );
  }
);

TextInput.displayName = "TextInput";
