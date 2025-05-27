import type { SxProps, Theme } from "@mui/material";

interface StyleProps {
  [key: string]: SxProps<Theme>;
}

export const styles: StyleProps = {
  wrapper: (theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 1,
    padding: theme.spacing(8, 2.5, 10, 2.5),
  }),
  checkoutCard: (theme) => ({
    background: "linear-gradient(to bottom, #FF6F48, #F02AA6)",
    color: theme.palette.primary.contrastText,
    borderRadius: 3.75,
    padding: 0,
  }),
  checkoutCardContent: (theme) => ({
    padding: theme.spacing(4),
  }),
};

export default styles;
