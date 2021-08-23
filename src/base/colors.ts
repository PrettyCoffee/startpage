// for greyscale: https://www.colorhexa.com/282a36-to-f8f8f2 -> 4th from light

export const colorSchemes: ColorScheme[] = [
  {
    name: "atom",
    base: {
      lightest: "#DCDFE4",
      light: "#bec1c7",
      basic: "#82858c",
      dark: "#464a51",
      darkest: "#282C34",
    },

    primary: {
      light: "",
      basic: "",
      dark: "",
    },

    secondary: {
      light: "",
      basic: "",
      dark: "",
    },

    palette: {
      red: "#E06C75",
      green: "#98C379",
      yellow: "#E5C07B",
      blue: "#61AFEF",
      purple: "#C678DD",
      cyan: "#56B6C2",
      orange: "#FFBB7C",
    },
  },

  // https://github.com/dracula/dracula-theme
  {
    name: "dracula",
    base: {
      lightest: "#f8f8f2",
      light: "#d5d6d3",
      basic: "#909194",
      dark: "#4b4c55",
      darkest: "#282a36",
    },

    primary: {
      light: "",
      basic: "",
      dark: "",
    },

    secondary: {
      light: "",
      basic: "",
      dark: "",
    },

    palette: {
      red: "#ff5555",
      green: "#50fa7b",
      yellow: "#f1fa8c",
      blue: "#6272a4",
      purple: "#bd93f9",
      cyan: "#8be9fd",
      orange: "#ffb86c",
    },
  },

  //https://github.com/arcticicestudio/nord
  {
    name: "nord",
    base: {
      lightest: "#ECEFF4",
      light: "#ccd0d6",
      basic: "#8d929b",
      dark: "#4e545f",
      darkest: "#2E3541",
    },

    primary: {
      light: "",
      basic: "",
      dark: "",
    },

    secondary: {
      light: "",
      basic: "",
      dark: "",
    },

    palette: {
      red: "#BF616A",
      green: "#A3BE8C",
      yellow: "#EBCB8B",
      blue: "#5E81AC",
      purple: "#B48EAD",
      cyan: "#88C0D0",
      orange: "#D08770",
    },
  },

  //https://material.io/design/color/the-color-system.html#tools-for-picking-colors
  {
    name: "material",
    base: {
      lightest: "#eceff1",
      light: "#bac0c3",
      basic: "#899194",
      dark: "#475157",
      darkest: "#263238",
    },

    primary: {
      light: "",
      basic: "",
      dark: "",
    },

    secondary: {
      light: "",
      basic: "",
      dark: "",
    },

    palette: {
      red: "#ef5350",
      green: "#66bb6a",
      yellow: "#ffee58",
      blue: "#42a5f5",
      purple: "#ab47bc",
      cyan: "#26c6da",
      orange: "#ffa726",
    },
  },
]

export type ColorSchemeName = "atom" | "dracula" | "nord" | "material"

export interface ColorScheme {
  name: ColorSchemeName

  base: {
    lightest: string
    light: string
    basic: string
    dark: string
    darkest: string
  }

  primary: {
    light: string
    basic: string
    dark: string
  }

  secondary: {
    light: string
    basic: string
    dark: string
  }

  palette: {
    red: string
    green: string
    yellow: string
    blue: string
    purple: string
    cyan: string
    orange: string
  }
}
