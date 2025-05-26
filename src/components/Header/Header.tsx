import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logoDark from "../../assets/logo-dark.svg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styles from "./Header.styles";

export const Header = () => {
  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <Box component="img" src={logoDark} alt="logo dark" />
        <Button variant="contained" sx={styles.button}>
          Get Started
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
