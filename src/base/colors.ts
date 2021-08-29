// for greyscale: https://www.colorhexa.com/282a36-to-f8f8f2 -> 4th from light

export const colorSchemes: ColorScheme[] = [
  {
    name: "atom",

    bg: {
      shade: "#17191e",
      base: "#282c34",
      surface: "#393f4a",
      highlight: "#4a5260",
    },

    fg: {
      shade: "#bbc1ca",
      base: "#d1d5db", //original: "#dcdfe4",
      surface: "#e7e9ed",
      highlight: "#fdfdfe",
    },

    primary: {
      light: "#bddffb",
      base: "#61afef",
      dark: "#197fd4",
    },

    secondary: {
      light: "#fcc7cb",
      base: "#E06C75",
      dark: "#992029",
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

    bg: {
      shade: "#17181f",
      base: "#282a36",
      surface: "#393c4d",
      highlight: "#494d63",
    },

    fg: {
      shade: "#bdbdbb",
      base: "#d0d0cf", //original: "#dadad9"
      surface: "#e4e4e3",
      highlight: "#f7f7f7",
    },

    primary: {
      light: "#ffeef8",
      base: "#ff79c6",
      dark: "#fd209d",
    },

    secondary: {
      light: "#b1fdc5",
      base: "#50fa7b",
      dark: "#00ee3f",
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

    bg: {
      shade: "#1e2129",
      base: "#2E3440",
      surface: "#3e4757",
      highlight: "#4f596e",
    },

    fg: {
      shade: "#b2bed4",
      base: "#cbd3e2", //original: "#D8DEE9",
      surface: "#e5e9f0",
      highlight: "#fefefe",
    },

    primary: {
      light: "#dde8f2",
      base: "#81A1C1",
      dark: "#39628b",
    },

    secondary: {
      light: "#e7f1f1",
      base: "#8FBCBB",
      dark: "#39807d",
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

    bg: {
      shade: "#080808",
      base: "#212121",
      surface: "#424242",
      highlight: "#616161",
    },

    fg: {
      shade: "#BDBDBD",
      base: "#E0E0E0",
      surface: "#EEEEEE",
      highlight: "#F5F5F5",
    },

    primary: {
      light: "#C8E6C9",
      base: "#4CAF50",
      dark: "#2E7D32",
    },

    secondary: {
      light: "#F48FB1",
      base: "#E91E63",
      dark: "#AD1457",
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

  bg: {
    shade: string
    base: string
    surface: string
    highlight: string
  }

  fg: {
    shade: string
    base: string
    surface: string
    highlight: string
  }

  primary: {
    light: string
    base: string
    dark: string
  }

  secondary: {
    light: string
    base: string
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
