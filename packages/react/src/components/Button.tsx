import { ComponentProps, ElementType, ReactNode } from "react";
import { styled } from "../styles";

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
  children?: ReactNode;
}

export const Button = styled("button", {
  fontFamily: "$code",
  borderRadius: "$md",
  border: 0,
  margin: "0 auto",
  fontWeight: "$bold",
  color: "$white",
  width: 149,
  height: 58,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  overflow: "hidden",
  padding: "0 16px",
  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: "$2 $4",
        width: 120,
        height: 40,
      },
      big: {
        fontSize: 16,
        padding: "$3 $6",
      },
      defaultVariants: {
        size: "small",
      },
    },
    type: {
      primary: {
        backgroundColor: "$primaryGreen1000",

        "&:not(:disabled):hover": {
          background: "$primaryGreen900",
        },

        "&:disabled": {
          backgroundColor: "$white",
          color: "$primaryGreen1000",
          border: "1px solid $primaryGreen1000",
          cursor: "not-allowed",
        },
      },
      secondary: {
        backgroundColor: "$complementBlue400",
        color: "$gray400",

        "&:not(:disabled):hover": {
          background: "$complementBlue300",
        },

        "&:disabled": {
          backgroundColor: "$white",
          color: "$complementBlue300",
          border: "1px solid $complementBlue300",
          cursor: "not-allowed",
        },
      },
      tertiary: {
        backgroundColor: "$white",
        color: "$secundaryOrange400",

        "&:disabled": {
          backgroundColor: "$white",
          color: "$secundaryOrange400",
          border: "1px solid $secundaryOrange400",
          cursor: "not-allowed",
        },
      },

      defaultVariants: {
        type: "primary",
      },
    },
    radii: {
      rounded: {
        borderRadius: "$lg",
      },
      roundedFull: {
        borderRadius: "$full",
      },
    },
  },
});

Button.displayName = "Button";
