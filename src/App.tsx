import Box from "@mui/material/Box";
import styles from "./App.styles";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <Box component="main" sx={styles.main}>
      <Header />
    </Box>
  );
}

export default App;
