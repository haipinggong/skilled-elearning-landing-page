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
    // position: "relative",
    overflow: "visible",
    [theme.breakpoints.up("sm")]: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
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
    zIndex: 2,
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
  imageWrapper: {
    position: "relative",
    zIndex: 1,
  },
  image: (theme) => ({
    height: "auto",
    width: "100%",
    objectFit: "contain",
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      height: "28rem",
      width: "28rem",
      maxWidth: "none",
    },
    [theme.breakpoints.up("md")]: {
      height: "auto",
      width: "100%",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 2,
      maxWidth: "100%",
      maxHeight: "35rem",
    },
  }),
};

export default styles;
