import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@saturn/react'

export default {
    title: 'Form/Button',
    args: {
        children: "Enviar"
    },
    component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
    args: {
        children: "Enviar"
    }
}

export const Big: StoryObj<ButtonProps> = {
    args: {
        size: 'big',
    }
}
