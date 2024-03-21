import { TextProps } from "@visx/text";

export const COLORS = {
    blue: "#4299E1",
    green: "#68D391",
    purple: "#6B46C1",
    gray: "#A0AEC0",
    black: "#262626",
    white: "#F7FAFC"
}

export const MARGINS = {
    top: 20,
    bottom: 30,
    left: 45,
    right: 20
}

export const PLOT_DIMENSIONS = {
    width: 700,
    height: 300,
}

export const PLOT_INNER_DIMENSIONS = {
    width: PLOT_DIMENSIONS.width - MARGINS.left - MARGINS.right,
    height: PLOT_DIMENSIONS.height - MARGINS.top - MARGINS.bottom,
}

export const AXIS_LABEL_PROPS: Partial<TextProps> = {
  fill: COLORS.black,
  fontSize: 10,
  textAnchor: "middle",
};