import type { SxProps, Theme } from "@mui/material";

interface StyleProps {
  [key: string]: SxProps<Theme>;
}

export const styles: StyleProps = {
  wrapper: (theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 1,
    background: `linear-gradient(to bottom, ${theme.palette.common.white}, #F0F1FF)`,
    padding: theme.spacing(8, 2.5, 10, 2.5),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(8, 5.5, 18, 5.5),
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(8, 10, 18, 10),
    },
  }),
  checkoutCard: (theme) => ({
    background: "linear-gradient(to bottom, #FF6F48, #F02AA6)",
    color: theme.palette.primary.contrastText,
    borderRadius: 3.75,
    padding: 0,
    minHeight: "100%",
  }),
  checkoutCardContent: (theme) => ({
    padding: theme.spacing(4),
  }),
};

export default styles;
