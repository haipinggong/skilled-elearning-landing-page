import { alpha, type SxProps, type Theme } from "@mui/material";

interface StyleProps {
  [key: string]: SxProps<Theme>;
}

export const styles: StyleProps = {
  footer: (theme) => ({
    backgroundColor: theme.palette.blue.dark,
    padding: theme.spacing(3, 2.5),
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3, 5.5),
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3, 10),
    },
  }),
  button: (theme) => ({
    borderRadius: 25,
    fontWeight: theme.typography.fontWeightMedium,
    padding: theme.spacing(2, 4),
    background: "linear-gradient(to bottom, #4851FF, #F02AA6)",
    textTransform: "none",
    typography: "body1",
    position: "relative",
    zIndex: 0,
    "&::after": {
      content: "''",
      position: "absolute",
      backgroundColor: alpha(theme.palette.common.white, 0.5),
      zIndex: 1,
      borderRadius: 25,
      inset: 0,
      opacity: 0,
      transition: "opacity 0.3s ease",
    },
    "&:hover::after": {
      opacity: 0.5,
    },
  }),
};

export default styles;
