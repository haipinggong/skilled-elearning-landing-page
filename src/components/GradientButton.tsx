import { Button, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";

const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  color: theme.palette.common.white,
  padding: "14px 32px",
  borderRadius: "28px",
  textTransform: "none",
  fontWeight: theme.typography.fontWeightBold,
  "&:hover": {
    background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${
      theme.palette.primary.light
    }), ${alpha(theme.palette.common.white, 0.5)}`,
  },
}));

export default GradientButton;
