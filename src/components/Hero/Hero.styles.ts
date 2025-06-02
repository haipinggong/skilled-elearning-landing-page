import type { SxProps, Theme } from "@mui/material";
import { alpha } from "@mui/material/styles";

interface StyleProps {
  [key: string]: SxProps<Theme>;
}

export const styles: StyleProps = {
  contentWrapper: (theme) => ({
    display: "flex",
    flexDirection: "column",
    padding: 0,
    gap: 6,
    margin: theme.spacing(8, 2.5),
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "row",
      gap: theme.spacing(3),
      margin: theme.spacing(8, 5.5),
    },
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(8, 10),
    },
  }),
  content: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    gap: 5,
    alignItems: "start",
    position: "relative",
  },
  text: {
    gap: 3,
    display: "flex",
    flexDirection: "column",
  },
  description: (theme) => ({
    color: theme.palette.grey[500],
  }),
  button: (theme) => ({
    fontWeight: theme.typography.fontWeightBold,
    textTransform: "none",
    background: "linear-gradient(to bottom, #FF6F48, #F02AA6)",
    fontSize: theme.typography.body1.fontSize,
    borderRadius: 28,
    padding: theme.spacing(2, 4),
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
  image: (theme) => ({
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      height: "25rem",
      transform: "translate(1rem, -10%)",
    },
    [theme.breakpoints.up("md")]: {
      height: "35rem",
      transform: "translate(1rem, -10%)",
    },
  }),
};

export default styles;
