import Box from "@mui/material/Box";
import styles from "./App.styles";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { ContentSection } from "./components/ContentSection/ContentSection";

function App() {
  return (
    <Box sx={styles.wrapper}>
      <Header />
      <Box component="main" sx={styles.main}>
        <Hero />
        <ContentSection />
      </Box>
    </Box>
  );
}

export default App;
