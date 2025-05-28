import type { SxProps, Theme } from "@mui/material";

interface StyleProps {
  [key: string]: SxProps<Theme>;
}

export const styles: StyleProps = {
  appBar: {
    backgroundColor: "white",
  },
  toolbar: (theme) => ({
    padding: theme.spacing(2, 2.5),
    justifyContent: "space-between",
  }),
  button: (theme) => ({
    borderRadius: 28,
    fontWeight: theme.typography.fontWeightMedium,
    padding: theme.spacing(2, 4),
    backgroundColor: theme.palette.blue.dark,
    textTransform: "none",
    typography: "body1",
  }),
};

export default styles;
