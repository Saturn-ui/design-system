import { User } from "phosphor-react";
import { AvatarContainer, AvatarImage, AvatarFallback } from "./styles";
import { AvatarProps } from "../../types/AvatarProps";

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  );
}
