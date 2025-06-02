import type { SxProps, Theme } from "@mui/material";

interface StyleProps {
  [key: string]: SxProps<Theme>;
}

export const styles: StyleProps = {
  card: {
    borderRadius: 3.75,
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
  },
  icon: (theme) => ({
    height: "56px",
    width: "56px",
    marginLeft: theme.spacing(4),
    position: "absolute",
    transform: "translateY(-50%)",
    zIndex: 1,
  }),
  content: (theme) => ({
    padding: theme.spacing(8, 4, 5, 4),
    // marginTop: theme.spacing(-3.5),
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: theme.spacing(3),
    flex: 1,
  }),
  title: (theme) => ({
    fontWeight: theme.typography.fontWeightBold,
  }),
  description: (theme) => ({
    color: theme.palette.grey[500],
    flex: 1,
  }),
  button: (theme) => ({
    color: theme.palette.pink.main,
    fontWeight: theme.typography.fontWeightBold,
    textTransform: "none",
    fontSize: theme.typography.body1.fontSize,
    padding: 0,
  }),
};

export default styles;
