import Box from "@mui/material/Box";
import styles from "./App.styles";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
function App() {
  return (
    <Box sx={styles.wrapper}>
      <Header />
      <Box component="main" sx={styles.main}>
        <Hero />
      </Box>
    </Box>
  );
}

export default App;
