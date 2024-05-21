import { TextInputProps } from "../../types/TextInputProps";
import { Input, Prefix, TextInputContainer } from "./styles";

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  );
}

TextInput.displayName = "TextInput";
