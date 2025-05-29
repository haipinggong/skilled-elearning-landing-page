import { createTheme } from "@mui/material/styles";
// import { alpha } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    lighter?: string;
  }

  interface SimplePaletteColorOptions {
    lighter?: string;
  }
  interface Palette {
    blue: Palette["primary"];
    pink: Palette["primary"];
    orange: Palette["primary"];
    purple: Palette["primary"];
    gradientPink: {
      main: string;
      light: string;
    };
    gradientPurple: {
      main: string;
      light: string;
    };
  }

  interface PaletteOptions {
    blue?: PaletteOptions["primary"];
    pink?: PaletteOptions["primary"];
    orange?: PaletteOptions["primary"];
    purple?: PaletteOptions["primary"];
    gradientPink?: {
      main: string;
      light: string;
    };
    gradientPurple?: {
      main: string;
      light: string;
    };
  }

  interface TypographyVariantsOptions {
    fontWeightExtraBold: number;
  }

  interface TypographyVariants {
    fontWeightExtraBold: number;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    gradient: true;
  }
}

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 471,
      md: 864,
      lg: 1440,
      xl: 1536,
    },
  },
  palette: {
    blue: {
      dark: "#13183F",
      main: "#666CA3",
      light: "#F0F1FF",
    },
    pink: {
      main: "#F74780",
      light: "#FFA7C3",
    },
    grey: {
      500: "#83869A",
    },
    // orange: {
    //   main: "#FF6F48",
    //   dark: "#F02AA6",
    // },
    // purple: {
    //   main: "#4851FF",
    //   light: "#F02AA6",
    // },
  },
  typography: {
    fontFamily: "Plus Jakarta Sans, sans-serif",
    fontWeightExtraBold: 800,
    fontWeightMedium: 500,
  },
});

theme = createTheme(theme, {
  palette: {
    // primary: {
    //   contrastText: theme.palette.common.white,
    // },
    // text: {
    //   primary: theme.palette.grey[500],
    // },
    background: {
      default: theme.palette.common.white,
    },
  },
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         textTransform: "none",
  //         borderRadius: "28px",
  //         padding: "14px 32px",
  //         fontWeight: theme.typography.fontWeightBold,
  //       },
  //     },
  //     variants: [
  //       {
  //         props: { variant: "gradient" },
  //         style: {
  //           background: theme.palette.common.black,
  //           color: theme.palette.common.white,
  //           "&:hover": {
  //             background: theme.palette.common.black,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: theme.typography.fontWeightExtraBold,
      lineHeight: 1.2,
      letterSpacing: 0,
      [theme.breakpoints.up("sm")]: {
        fontSize: "3.5rem",
      },
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: theme.typography.fontWeightExtraBold,
      lineHeight: 1.2,
      letterSpacing: 0,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: theme.typography.fontWeightExtraBold,
      lineHeight: 1.2,
      letterSpacing: 0,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: theme.typography.fontWeightExtraBold,
      lineHeight: 1.2,
      letterSpacing: 0,
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.5rem",
      },
    },
    body1: {
      fontSize: "1.125rem",
      fontWeight: theme.typography.fontWeightMedium,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    body2: {
      fontSize: "1rem",
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
  },
});

export default theme;
