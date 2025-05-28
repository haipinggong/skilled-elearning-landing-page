import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import logoLight from "../../assets/logo-light.svg";
import styles from "./Footer.styles";

export const Footer = () => {
  return (
    <Box component="footer" sx={styles.footer}>
      <Box component="img" src={logoLight} alt="logo light" />
      <Button variant="contained" sx={styles.button}>
        Get Started
      </Button>
    </Box>
  );
};

export default Footer;
