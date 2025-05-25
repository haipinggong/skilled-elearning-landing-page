import Box from "@mui/material/Box";
import styles from "./App.styles";

import logoDark from "./assets/logo-dark.svg";

function App() {
  return (
    <Box component="main" sx={styles.main}>
      <Box sx={styles.card}>
        <Box component="img" src={logoDark} alt="logo dark" sx={styles.image} />
      </Box>
    </Box>
  );
}

export default App;
