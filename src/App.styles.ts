import type { SxProps, Theme } from "@mui/material";

interface StyleProps {
  [key: string]: SxProps<Theme>;
}

export const styles: StyleProps = {
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
};

export default styles;
