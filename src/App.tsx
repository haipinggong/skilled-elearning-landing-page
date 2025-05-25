import Box from "@mui/material/Box";
import styles from "./App.styles";
import GradientButton from "./components/GradientButton";

import logoDark from "./assets/logo-dark.svg";

function App() {
  return (
    <Box component="main" sx={styles.main}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box component="img" src={logoDark} alt="logo dark" />
        <GradientButton>Get Started</GradientButton>
      </Box>
    </Box>
  );
}

export default App;
