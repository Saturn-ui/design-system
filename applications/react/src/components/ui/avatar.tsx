import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"
import { colors } from "../../../../../packages/tokens/src/colors"
import { space } from "../../../../../packages/tokens/src/space"
import { radii } from "../../../../../packages/tokens/src/radii"

function Avatar({
  className,
  size = "default",
  color = "default",
  radius = "default",
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & { 
  size?: keyof typeof space; 
  color?: keyof typeof colors;
  radius?: keyof typeof radii; }) {
  const sizeValue = space[size]
  const colorValue = colors[color]
  const radiusValue = radii[radius]

  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        `relative flex shrink-0 overflow-hidden`,
        sizeValue ? `w-[${sizeValue}] h-[${sizeValue}]` : "",
        colorValue ? `bg-[${colorValue}]` : "",
        radiusValue ? `rounded-[${radiusValue}]` : "",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
