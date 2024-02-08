import { lineHeights, colors, fontSizes, fontWeights, fonts, radii, space, boxShadow, animationDuration } from "@saturn/tokens";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    themeMap: {
        ...defaultThemeMap,
        height: 'space',
        window: 'space',
    },
    theme: {
        colors,
        fontSizes,
        fontWeights,
        fonts,
        lineHeights,
        radii,
        space,
        shadows: boxShadow,
        transitions: animationDuration
    }
})