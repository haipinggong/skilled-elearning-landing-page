import type { SxProps, Theme } from "@mui/material";

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
  }),
};

export default styles;
