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
      bg: "#197fd4",
      base: "#61afef",
      fg: "#bddffb",
    },

    secondary: {
      bg: "#992029",
      base: "#E06C75",
      fg: "#fcc7cb",
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
      bg: "#fd209d",
      base: "#ff79c6",
      fg: "#ffeef8",
    },

    secondary: {
      bg: "#00ee3f",
      base: "#50fa7b",
      fg: "#b1fdc5",
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
      bg: "#39628b",
      base: "#81A1C1",
      fg: "#dde8f2",
    },

    secondary: {
      bg: "#39807d",
      base: "#8FBCBB",
      fg: "#e7f1f1",
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
      bg: "#2E7D32",
      base: "#4CAF50",
      fg: "#C8E6C9",
    },

    secondary: {
      bg: "#AD1457",
      base: "#E91E63",
      fg: "#F48FB1",
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
    bg: string
    base: string
    fg: string
  }

  secondary: {
    bg: string
    base: string
    fg: string
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
