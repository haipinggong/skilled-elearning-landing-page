import type { SxProps, Theme } from "@mui/material";

interface StyleProps {
  [key: string]: SxProps<Theme>;
}

export const styles: StyleProps = {
  wrapper: (theme) => ({
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(8, 2.5),
  }),
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    gap: 6,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    gap: 5,
  },
};

export default styles;
